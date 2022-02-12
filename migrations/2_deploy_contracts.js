// const Flashswap = artifacts.require('./Flashswap.sol');
const HighToken = artifacts.require('./HighToken.sol');
const MasterChef = artifacts.require('./MasterChef.sol')

module.exports = function (deployer, network, accounts) {
  console.log(network, accounts)
  return deployer.then(() => {
    return deployContracts(deployer, network, accounts)
  })
}

async function deployContracts(deployer, network, accounts) {
  let highToken = await deployer.deploy(HighToken);
  let masterChef = await deployer.deploy(MasterChef, highToken.address, '0xd16315bd32c075BEE80434b3Ccc0334233a3bc43', '0xd16315bd32c075BEE80434b3Ccc0334233a3bc43', 1, 10830385);
}
