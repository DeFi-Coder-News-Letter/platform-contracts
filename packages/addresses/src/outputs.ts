/* tslint:disable */

export const outputs = {
  "1-production": {
    "human_friendly_name": "main-net-production",
    "addresses": {
      "LegacyCards": "0x6EbeAf8e8E946F0716E6533A6f2cefc83f60e8Ab",
      "Cards": "0x0e3a2a1f2146d86a604adc220b4967a898d7fe07",
      "Forwarder": "0xb04239b53806ab31141e6cd47c63fb3480cac908",
      "Fusing": "0x7c633611d9199Faff68bCE5c5Ad97d3514319B77",
      "S3PromoFactory": "0x28A54b2b798Bb8b8751D1Cd423A435472a009272",
      "S5PromoFactory": "0x8eB207F54846614Aebe3335DF2BD351823a04316",
      "Forge": "0x604b7a4a8ad3c4bc876c660a74b1a6e147b156c0",
      "BLACKLIST_Fusing": "0x833EA312aC6Ef27d2ca40BF247B0c5edbe991314",
      "EtherbotsMigration": "0xa777967d22043BE43f8fAd3552AD486f3765FD29",
      "ChimeraMigration": "0xc0f1eE9884Be19c4bB2e31F505f7a18FdB9c8025"
    },
    "dependencies": {
      "WETH": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "ZERO_EX_EXCHANGE": "0x080bf510fcbf18b91105470639e9561022937712",
      "ZERO_EX_ERC20_PROXY": "0x95e6f48254609a6ee006f7d493c8e5fb97094cef",
      "ZERO_EX_ERC721_PROXY": "0xefc70a1b18c432bdc64b596838b4d138f6bc6cad"
    },
    "state": {
      "network_id": 1,
      "last_deployment_stage": null
    }
  },
  "3-development": {
    "human_friendly_name": "ropsten-development",
    "addresses": {},
    "dependencies": {
      "ZERO_EX_EXCHANGE": "0xbff9493f92a3df4b0429b6d00743b3cfb4c85831",
      "ZERO_EX_ERC20_PROXY": "0xb1408f4c245a23c31b98d2c626777d4c0d766caa",
      "ZERO_EX_ERC721_PROXY": "0xe654aac058bfbf9f83fcaee7793311dd82f6ddb4",
      "WETH": "0xc778417e063141139fce010982780140aa0cd5ab"
    },
    "state": {
      "network_id": 3
    }
  },
  "3-staging": {
    "human_friendly_name": "ropsten-staging",
    "addresses": {
      "Cards": "0xADC559D1afbCBBf427728577F40E7358D96F1209",
      "OpenMinter": "0x36F26280B80e609e347c843E2AE5351Ee4b5f7eD",
      "Forwarder": "0xc79C9c624ea8A3dEdfae0dbf9295Bfb159eE5F3b",
      "Fusing": "0xFfFB48F70Dd10a468957cDD099047e046AdE8670"
    },
    "dependencies": {
      "WETH": "0xc778417e063141139fce010982780140aa0cd5ab",
      "ZERO_EX_EXCHANGE": "0xbff9493f92a3df4b0429b6d00743b3cfb4c85831",
      "ZERO_EX_ERC20_PROXY": "0xb1408f4c245a23c31b98d2c626777d4c0d766caa",
      "ZERO_EX_ERC721_PROXY": "0xe654aac058bfbf9f83fcaee7793311dd82f6ddb4"
    }
  },
  "50-development": {
    "human_friendly_name": "test-rpc-development",
    "addresses": {
      "IM_Beacon": "0x1dC4c1cEFEF38a777b15aA20260a54E584b16C48",
      "IM_Processor": "0x1D7022f5B17d2F8B695918FB48fa1089C9f85401",
      "IM_TestVendor": "0x871DD7C2B4b25E1Aa18728e9D5f2Af4C4e431f5c",
      "IM_Escrow": "0x0B1ba0af832d7C05fD64161E0Db78E85978E8082",
      "IM_Escrow_CreditCard": "0x48BaCB9266a570d521063EF5dD96e61686DbE788",
      "GU_Cards": "0x25B8Fe1DE9dAf8BA351890744FF28cf7dFa8f5e3",
      "GU_OpenMinter": "0x6DfFF22588BE9b3ef8cf0aD6Dc9B84796F9fB45f",
      "GU_Fusing": "0xcFC18CEc799fBD1793B5C43E773C98D4d61Cc2dB",
      "GU_PromoFactory": "0xF22469F31527adc53284441bae1665A7b9214DBA",
      "GU_S1_Vendor": "0x8d61158a366019aC78Db4149D75FfF9DdA51160D",
      "GU_S1_Raffle": "0x131855DDa0AaFF096F6854854C55A4deBF61077a",
      "GU_S1_Sale": "0xB69e673309512a9D726F87304C6984054f87a93b",
      "GU_S1_Referral": "0xE86bB98fcF9BFf3512C74589B78Fb168200CC546",
      "GU_S1_Epic_Pack": "0xDc688D29394a3f1E6f1E5100862776691afAf3d2",
      "GU_S1_Rare_Pack": "0xb7C9b454221E26880Eb9C3101B3295cA7D8279EF",
      "GU_S1_Shiny_Pack": "0x6000EcA38b8B5Bba64986182Fe2a69c57f6b5414",
      "GU_S1_Legendary_Pack": "0x6346e3A22D2EF8feE3B3c2171367490e52d81C52"
    },
    "dependencies": {
      "ZERO_EX_EXCHANGE": "0x48bacb9266a570d521063ef5dd96e61686dbe788",
      "ZERO_EX_ERC20_PROXY": "0x1dc4c1cefef38a777b15aa20260a54e584b16c48",
      "ZERO_EX_ERC721_PROXY": "0x1d7022f5b17d2f8b695918fb48fa1089c9f85401",
      "WETH": "0x0b1ba0af832d7c05fd64161e0db78e85978e8082"
    },
    "state": {
      "network_id": 50,
      "last_deployment_stage": null
    }
  }
}