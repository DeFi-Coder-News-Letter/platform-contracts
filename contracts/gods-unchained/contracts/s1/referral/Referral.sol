pragma solidity 0.5.11;

import "@openzeppelin/contracts/math/SafeMath.sol";

/**
 * @title Referral
 * @notice The referral contract for Season 1.
 * @author Gods Unchained
 */
contract Referral {

    using SafeMath for uint256;

    uint8 vendorPercentage;
    uint8 referrerPercentage;

    constructor(uint8 _vendorPercentage, uint8 _referrerPercentage) public {
        vendorPercentage = _vendorPercentage;
        referrerPercentage = _referrerPercentage;
        require(
            vendorPercentage + referrerPercentage == 100,
            "GU:S1:Referral: invalid constructor params"
        );
    }

    /**
     * @dev Get the split of cost between purchaser/referrer
     *
     * @param _user The address of the purchasing user
     * @param _value The total value of the purchase
     * @param _referrer The address of the referring user
     */
    function getSplit(
        address _user, uint256 _value, address _referrer
    ) external view returns (
        uint256 toVendor, uint256 toReferrer
    ) {
        toVendor = _getVendorPercentage(_value, vendorPercentage);
        toReferrer = _getReferrerPercentage(_value, referrerPercentage);
        require(
            toVendor.add(toReferrer) == _value,
            "Referral: wrong sum value"
        );

        return (toVendor, toReferrer);
    }

    function _getVendorPercentage(uint _amount, uint8 _percentage) internal pure returns (uint) {
        return _halfUpDiv(_amount.mul(_percentage), 100);
    }

    function _getReferrerPercentage(uint _amount, uint8 _percentage) internal pure returns (uint) {
        return _moreThanHalfUpDiv(_amount.mul(_percentage), 100);
    }

    function _moreThanHalfUpDiv(uint256 a, uint256 b) internal pure returns (uint256) {
        return (a % b > _halfDenom(b)) ? a.div(b).add(1) : a.div(b);
    }

    function _halfUpDiv(uint256 a, uint256 b) internal pure returns (uint256) {
        return (a % b >= _halfDenom(b)) ? a.div(b).add(1) : a.div(b);
    }

    function _halfDenom(uint256 b) internal pure returns (uint256) {
        require(b > 0, "div by 0");
        return (b % 2 == 0) ? b.div(2) : (b.div(2)).add(1);
    }

}