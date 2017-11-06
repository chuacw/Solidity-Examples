// Example written by chuacw
const OwnedContract = artifacts.require('./OwnedContract');

contract('OwnedContract', function(accounts) {

  let contractInstance;
  let owner = accounts[0];

  beforeEach('setup contract for each test', async() => {
      contractInstance = await OwnedContract.deployed(); // .new to create a new instance, .deployed() to get an existing instance
  })

  it('has an owner', async() => {
      let instanceOwner = await contractInstance.owner();
      assert.equal(instanceOwner, owner);
  })

})










































// chuacw
