import { task } from "hardhat/config";
import * as fs from 'fs';

async function connect(ethers, contract)  {
    const [owner] = await ethers.getSigners();
    const ZkOracle = await ethers.getContractFactory("zkOracle")
    const oracle_inst = ZkOracle.attach(contract)
    const zkOracle = await oracle_inst.connect(owner)

    return {owner, zkOracle};
}

task("recieve-and-update", 
    "reieve new protocol state (hash) via zkOracle and update it in ULN")
    .addParam("contract", "contract address")
    .addParam("schain", "Source chain ID")
    .addParam("pf", "Proof type indentifier")
    .addParam("ua", "User application address")
    .addParam("update", "Light client update file")
    .setAction(async ({contract, schain, pf, ua, update}, hre) => {
        const { ethers } = hre;

        const {owner, zkOracle} = await connect(ethers, contract)

        const jsonData = fs.readFileSync(update, "utf8");

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
            schain, pf, ua, lightClientUpdate);
        const receipt = await tx.wait()
        console.log(receipt)
    });