require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-ethers");

import './tasks/deploy'
import './tasks/deploy-test'
import './tasks/verify-etherscan'
import './tasks/zkOracle'
//import './tasks/oracle-recieve'
//import './tasks/oracle-send'

module.exports = {
    solidity: {
        version: "0.8.16",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    namedAccounts: {
        deployer: 0,
    },
    networks: {
        hardhat: {
            blockGasLimit: 100_000_000,
            chainId: 100,
        },
        ganache: {
            blockGasLimit: 100_000_000,
            url: "http://127.0.0.1:8545",
        },
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/HJh5G_Jf0azUM_rW-ADMDCFCPAP36QoE",
            //accounts: [SEPOLIA_PRIVATE_KEY]
        }
    },
    allowUnlimitedContractSize:true
};
