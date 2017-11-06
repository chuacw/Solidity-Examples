pragma solidity ^0.4.16;

import "./OwnedContract.sol";

contract Balances is OwnedContract {

  mapping (address => uint256) public balances;

  function setBalances(uint256 value) public {
    // meant to be an example, so using the value parameter, instead of the implicit msg.value
    balances[msg.sender] = value;
  }

  function Balances() payable public OwnedContract() {
    setBalances(msg.value); // meant to be an example
  }

}
