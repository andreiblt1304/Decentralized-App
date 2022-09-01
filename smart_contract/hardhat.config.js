//https://eth-goerli.g.alchemy.com/v2/wek3DKkep4T0q_O0ZW_6epjha2jToCrr
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/wek3DKkep4T0q_O0ZW_6epjha2jToCrr',
      accounts: ['bfbb22e8d9ca6f2dde42623fcde839a10185fd33dcade812c8106b15905cfee0']
    }
  }
}