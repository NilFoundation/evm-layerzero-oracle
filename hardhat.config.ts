require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require('hardhat-deploy-ethers')

import './tasks/deploy'
import './tasks/deploy-test'
import './tasks/verify-etherscan'
import './tasks/zkOracle'
//import './tasks/oracle-recieve'
//import './tasks/oracle-send'

const SEPOLIA_PRIVATE_KEY="..."
const SEPOLIA_ALCHEMY_KEY="..."

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.7.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.16",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            }
        ]
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
        },
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_ALCHEMY_KEY}`,
            accounts: [SEPOLIA_PRIVATE_KEY]
        },
    },
    allowUnlimitedContractSize:true
};
