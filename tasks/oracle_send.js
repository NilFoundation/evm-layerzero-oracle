const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");

task("send_via_oracle", 
    "send new protocol state (hash) via zkOracle")
    .addParam("dstChain", "Destination chain ID")
    .addParam("proofType", "Proof type indentifier")
    .addParam("blockConfirmation", "Block confirmation delay before relaying blocks")
    .setAction(async ({dstChain, proofType, blockConfirmation}, hre) => {
        const { ethers } = hre;

        const {_deployer, userApp} = await hre.getNamedAccounts();

        const zkOracle = await ethers.getContract("zkOracle");

        const tx = await zkOracle.assignJob(dstChain, proofType, blockConfirmation, userApp);
        const receipt = await tx.wait()
        console.log(receipt)
    });