const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");

if(process.env.NODE_ENV === 'production') {
  require('dotenv').config({path: path.join(__dirname, '.env')});
} else {
  require('dotenv').config({path: path.join(__dirname, '.env.dev')});
}

module.exports = {
  contracts_build_directory: path.join(__dirname, "./compiled"),
  migrations_directory: path.join(__dirname, "./migrations"),
  contracts_directory: "./contracts",
  mocha: {
    reporter: 'eth-gas-reporter',
  },
  networks: {
    mainnet: {
      provider: () => new HDWalletProvider("65841762a510a925032ce4653771035dd78d564257e12eaf77c2bb2024262806", `https://api.avax.network/ext/bc/C/rpc`),
      network_id: 43114,
      confirmations: 2,      // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 300,  // # of blocks before a deployment times out  (minimum/default: 50)
      gasPrice: 29000000000,
      gas: 4612388,
      skipDryRun: true       // Skip dry run before migrations? (default: false for public nets )
    },
    bsctestnet: {
      provider: () => new HDWalletProvider("", `https://data-seed-prebsc-1-s1.binance.org:8545/`),
      network_id: 97,
      confirmations: 1,       // # of confs to wait between deployments. (default: 0)
      gasPrice: 10000000000,
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true       // Skip dry run before migrations? (default: false for public nets )
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
       optimizer: {
         enabled: true,
         runs: 999999999
       },
      }
    },
  },
  api_keys: {
    snowtrace: process.env.ETHERSCAN_API_KEY
  }
};

