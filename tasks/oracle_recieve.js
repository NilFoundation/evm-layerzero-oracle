const { task } = require("hardhat/config");
const fs = require("fs");

require("@nomicfoundation/hardhat-toolbox");

task("recieve_and_update", 
    "reieve new protocol state (hash) via zkOracle and update it in ULN")
    .addParam("srcChain", "Source chain ID")
    .addParam("proofType", "Proof type indentifier")
    .addParam("userApp", "User application address")
    .addParam("updateFile", "Light client update file")
    .setAction(async ({srcChain, proofType, userApp, updateFile}, hre) => {
        const { ethers } = hre;

        const zkOracle = await ethers.getContract("zkOracle");

        const jsonData = fs.readFileSync(updateFile, "utf8");

        const data = JSON.parse(jsonData);

        const { attestedSlot, 
            finalizedSlot, 
            participation, 
            finalizedHeaderRoot, 
            executionStateRoot, 
            proof } = data;

        const lightClientUpdate = {
            attestedSlot: ethers.BigNumber.from(attestedSlot),
            finalizedSlot: ethers.BigNumber.from(finalizedSlot),
            participation: ethers.BigNumber.from(participation),
            finalizedHeaderRoot: ethers.utils.hexlify(finalizedHeaderRoot),
            executionStateRoot: ethers.utils.hexlify(executionStateRoot),
            proof: ethers.utils.arrayify(proof),
        };

        const tx = await zkOracle.processRequest(
            srcChain, proofType, userApp, lightClientUpdate);
        const receipt = await tx.wait()
        console.log(receipt)
    });