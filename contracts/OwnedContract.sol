pragma solidity ^0.4.16;

contract OwnedContract {
   address public owner;

   function OwnedContract() public {
     owner = msg.sender;
   }
}
