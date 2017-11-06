// Example written by chuacw 
const Balances = artifacts.require('./Balances.sol');

contract('Balances', function(accounts) {

  let balancesInstance;
  let owner = accounts[0];
  let other1 = accounts[1];

  beforeEach('setup contract for each test', async() => {
      balancesInstance = await Balances.deployed(); // .new to create a new instance, .deployed() to get an existing instance
  })

  it('can set balance', async() => {
      let instanceOwner = await balancesInstance.owner();
      balancesInstance.setBalances(1000, {from: other1});
  })

  it('can get balance', async() => {
      let instanceOwner = await balancesInstance.owner();

      let balanceValue = -1;

      // this is how a public mapping is retrieved
      // In Solidity: mapping (address => uint256) public mappingName;
      // In Javascript: contractInstance.mappingName.call(address_value);
      // this here retrieves it...
      balanceValue = await balancesInstance.balances.call(other1);
      assert.equal(balanceValue != -1, true);
  })

  it('can set and get the same balance', async() => {
      let instanceOwner = await balancesInstance.owner();

      // this here calls setBalances using the other1 account
      let setValue = 4000;
      await balancesInstance.setBalances(setValue, {from: other1});

      // this is how a public mapping is retrieved
      // In Solidity: mapping (address => uint256) public mappingName;
      // In Javascript: contractInstance.mappingName.call(address_value);
      // this here retrieves it...
      let balanceValue = await balancesInstance.balances.call(other1);
      assert.equal(balanceValue, setValue);
  })

})










































// chuacw
