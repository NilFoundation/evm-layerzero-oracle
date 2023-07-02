import { task } from "hardhat/config";
import {ZkOracle__factory, type ZkOracle} from '../typechain-types'

task("send-via-oracle", 
    "send new protocol state (hash) via zkOracle")
    .addParam("contract", "contract address")
    .addParam("ua", "user application address")
    .addParam("dstchain", "Destination chain ID")
    .addParam("proof", "Proof type indentifier")
    .addParam("conf", "Block confirmation delay before relaying blocks")
    .setAction(async ({contract, ua, dstChain, proofType, blockConfirmation}, hre) => {
        const { ethers } = hre;
        const [owner] = await ethers.getSigners();

        const zkOracle = ZkOracle__factory.connect(
            contract,
            owner
        )

        const tx = await zkOracle.assignJob(dstChain, proofType, blockConfirmation, ua);
        const receipt = await tx.wait()
        console.log(receipt)
    });