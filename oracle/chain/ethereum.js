const Hardhat = require("hardhat");
const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");
const fs = require('fs');
const path = require('path');

class EthereumChain {

    chainID = 1;
    active = true;

    isActive() {
        return this.active;
    }
    getChainID() {
        return this.chainID;
    }

    async send(args) {
        let ret = NaN;
        const ZKOracle = await ethers.getContractFactory("zkOracle");
        const filePath = path.join(__dirname, 'configs.json');
        const configs = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const zkOracle = ZKOracle.attach(configs["ethereum"]["zkOracle"]);
        ret = await zkOracle.processRequest(
            this.chainID,
            args["proofType"],
            args["ua"],  
            args["hash"],
            {
                "attestedSlot": args["meta"]["blockNumber"],
                "finalizedSlot": args["meta"]["blockNumber"],
                "participation": args["meta"]["confirmations"],
                "finalizedHeaderRoot": args["meta"]["blockHash"],
                "executionStateRoot": args["meta"]["blockHash"],
                "proof": Uint8Array.from(Buffer.from(args["proof"].slice(2, 64), 'hex'))
            }
        )
        
        let logs = await ret.wait();
        console.log(logs)

        return ret;
    }
}

module.exports = EthereumChain;
