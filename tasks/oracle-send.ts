import { task } from "hardhat/config";

async function connect(ethers, contract)  {
    const [owner] = await ethers.getSigners();
    const ZkOracle = await ethers.getContractFactory("zkOracle")
    const oracle_inst = ZkOracle.attach(contract)
    const zkOracle = await oracle_inst.connect(owner)

    return {owner, zkOracle};
}

task("send-via-oracle", 
    "send new protocol state (hash) via zkOracle")
    .addParam("contract", "contract address")
    .addParam("ua", "user application address")
    .addParam("dstchain", "Destination chain ID")
    .addParam("proof", "Proof type indentifier")
    .addParam("conf", "Block confirmation delay before relaying blocks")
    .setAction(async ({contract, ua, dstChain, proofType, blockConfirmation}, hre) => {
        const { ethers } = hre;
        
        const {owner, zkOracle} = await connect(ethers, contract)

        const tx = await zkOracle.assignJob(dstChain, proofType, blockConfirmation, ua);
        const receipt = await tx.wait()
        console.log(receipt)
    });