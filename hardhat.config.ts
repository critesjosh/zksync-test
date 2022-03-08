require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");
require("@nomiclabs/hardhat-ethers");
import 'dotenv/config'

module.exports = {
  networks: {
    "truffle-dashboard": {
      url: "http://localhost:24012/rpc"
    },
    hardhat: {
      zksync: true,
    },
  },
  zksolc: {
    version: "0.1.0",
    compilerSource: "docker",
    settings: {
      optimizer: {
        enabled: true,
      },
      experimental: {
        dockerImage: "matterlabs/zksolc",
      },
    },
  },
  zkSyncDeploy: {
    zkSyncNetwork: "https://zksync2-testnet.zksync.dev",
    ethNetwork: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`, // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
  },
  solidity: {
    version: "0.8.11",
  },
};