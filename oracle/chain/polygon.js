const Hardhat = require("hardhat");
const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");
const fs = require('fs');
const path = require('path');

class PolygonChain {

    chainID = 2;
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
        const zkOracle = ZKOracle.attach(configs["polygon"]["zkOracle"]);

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
                "proof": ethers.utils.toUtf8Bytes(args["proof"]),
            }
        )
        
        let logs = await ret.wait();
        console.log(logs)
        console.log(args["hash"])

        return ret;
    }
}

module.exports = PolygonChain;
