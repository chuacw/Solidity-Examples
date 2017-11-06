var Migrations = artifacts.require("./Migrations.sol");
var OwnedContract = artifacts.require("./OwnedContract");
var Balances   = artifacts.require("./Balances");

module.exports = function(deployer) {
  let accounts = web3.eth.accounts; // can the deployment be called by any account?

  console.log(accounts);
  deployer.deploy(Migrations);
  deployer.deploy(OwnedContract);
  deployer.deploy(Balances);
};
