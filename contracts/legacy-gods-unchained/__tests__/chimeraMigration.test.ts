import { generatedWallets, Blockchain, expectRevert } from '@imtbl/test-utils';
import { asyncForEach } from '@imtbl/utils';

import { Address } from '@imtbl/common-types';
import { ethers } from 'ethers';
import {
  CardIntegrationTwo,
  ChimeraMigration,
  CardIntegrationTwoFactory,
  ChimeraMigrationFactory,
} from '../src/contracts';
import { Cards, CardsWrapper, CardsFactory, PromoFactoryFactory } from '@imtbl/gods-unchained';

const provider = new ethers.providers.JsonRpcProvider();
const blockchain = new Blockchain();

describe('Core', () => {
  const [ownerWallet, immutableWallet, userWallet, unauthorisedWallet] = generatedWallets(provider);
  const BATCH_SIZE = 101;
  const CUT_OFF = 2;

  beforeEach(async () => {
    await blockchain.resetAsync();
    await blockchain.saveSnapshotAsync();
  });

  afterEach(async () => {
    await blockchain.revertAsync();
  });

  describe('#constructor', () => {
    it('should be able to deploy the chimera contract', async () => {
      const chimera = await new ChimeraMigrationFactory(ownerWallet).deploy(
        ethers.constants.AddressZero,
        ethers.constants.AddressZero,
        CUT_OFF,
      );
      const cutOff = await chimera.functions.cutOffLimit();
      expect(cutOff.toNumber()).toBe(CUT_OFF);
    });
  });

  describe('#migrate', () => {
    let oldCardsAddress: Address;
    let newCardsAddress: Address;
    let chimeraMigrationAddress: Address;

    let callerTokenId;
    let caller;

    beforeEach(async () => {
      callerTokenId = 3;
      caller = userWallet;

      chimeraMigrationAddress = '';
      oldCardsAddress = '';
      newCardsAddress = '';

      const oldCards = await new CardIntegrationTwoFactory(ownerWallet).deploy();
      await oldCards.functions.addProto(394, 1, 1, 1, 1, 1, 1, 1, false);

      // Create 4 cards to test with
      await asyncForEach([0, 1, 2, 3], async (item) => {
        const tx = await oldCards.functions.createCard(userWallet.address, 394, 1);
        await tx.wait();
      });

      const newCards = await new CardsWrapper(ownerWallet).deploy(BATCH_SIZE, [
        { name: 'Promo', low: 400, high: 500 },
      ]);

      const promoFactory = await new PromoFactoryFactory(ownerWallet).deploy(
        newCards.address,
        400,
        500,
      );

      // Deploy the Chimera Migration contract with one card as the cutoff limit
      const chimeraMigration = await new ChimeraMigrationFactory(ownerWallet).deploy(
        oldCards.address,
        promoFactory.address,
        CUT_OFF,
      );

      await promoFactory.functions.assignPromoMinter(chimeraMigration.address, 402);
      await newCards.functions.addFactory(promoFactory.address, 1);

      oldCardsAddress = oldCards.address;
      newCardsAddress = newCards.address;
      chimeraMigrationAddress = chimeraMigration.address;
    }, 10000);

    async function subject() {
      const chimera = await new ChimeraMigrationFactory(caller).attach(chimeraMigrationAddress);
      const tx = await chimera.functions.migrate(callerTokenId);
      return await tx.wait();
    }

    it('should not be able to migrate if it does not have ownership', async () => {
      caller = unauthorisedWallet;
      await expectRevert(subject());
    });

    it('should not be able to migrate if the token id is less than CUT_OFF', async () => {
      callerTokenId = 1;
      await expectRevert(subject());
    });

    it('should be able to migrate if the token id is on the CUT_OFF', async () => {
      callerTokenId = 2;
      await subject();
    });

    it('should not be able to migrate the same card twice', async () => {
      await subject();
      await expectRevert(subject());
    });

    it('should be able to migrate the card with the correct proto', async () => {
      await subject();
      console.log(newCardsAddress);
      const newCards = await new CardsFactory(userWallet).attach(newCardsAddress);
      const card = await newCards.functions.getDetails(0);
      console.log(card);
      expect(card.proto).toBe(402);
    });
  });
});
