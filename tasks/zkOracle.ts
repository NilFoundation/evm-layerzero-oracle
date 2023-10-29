import {task} from 'hardhat/config'
import * as fs from 'fs';
import * as losslessJSON from 'lossless-json'

function bigintReviver(key, value) {
    if (value && value.isLosslessNumber) {
      return BigInt(value.value);
    }
    return value;
}

async function connect(ethers, contract)  {
    const [owner] = await ethers.getSigners();
    const ZkOracle = await ethers.getContractFactory("zkOracle")
    const oracle_inst = ZkOracle.attach(contract)
    const zkOracle = await oracle_inst.connect(owner)

    return {owner, zkOracle};
}

task("setLightClient")
    .addParam('contract', 'contract address')
    .addParam('lc', 'light client address')
    .addParam('ua', 'user application address')
    .setAction(async (taskArgs, {ethers, run}) => {
        const contract = taskArgs.contract
        const lightClient = taskArgs.lc
        const userApp = taskArgs.ua
        
        const {owner, zkOracle} = await connect(ethers, contract)
        
        await zkOracle.setLightClient(lightClient, userApp)
})

task("setLayerZeroEndpoint")
    .addParam('contract', 'contract address')
    .addParam('endpoint', 'endpoint address')
    .setAction(async (taskArgs, {ethers, run}) => {
        
        const endpoint = taskArgs.endpoint
        const contract = taskArgs.contract
        
        let {owner, zkOracle} = await connect(ethers, contract)

        await zkOracle.setLayerZeroEndpoint(endpoint)
})

task("processRequest")
    .addParam('contract', 'contract address')
    .addParam('schain', 'source chain ID')
    // .addParam('proof', 'type of proof to be used')
    // .addParam('ua', 'user application address')
    .addParam('update', 'update structure', 'tasks/input_data/update.json')
    .setAction(async (taskArgs, {ethers, run}) => {
        const contract = taskArgs.contract
        const srcChainId = taskArgs.schain
        // const proofType = taskArgs.proof
        // const userApp = taskArgs.ua
        // const lcUpdate = taskArgs.update
        let {owner, zkOracle} = await connect(ethers, contract)

        const jsonString = fs.readFileSync(taskArgs.update, 'utf-8');
        let update = losslessJSON.parse(jsonString, bigintReviver);

        // update.proof = update.proof.slice(0, -1) + '0';
        

        await zkOracle.processRequest(
            srcChainId,
            "0x01", // random placeholder
            "0x67d50729Eb3136bABc2d2504755E4D2Cd6b95D51", // random placeholder
            "0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef", // random placeholder
            update,
        )
})

task("assignJob")
    .addParam('contract', 'contract address')
    .addParam('schain', 'source chain ID')
    .addParam('proof', 'type of proof to be used')
    .addParam('conf', 'number of confirmations')
    .addParam('ua', 'user application address')
    .setAction(async (taskArgs, {ethers, run}) => {
        const contract = taskArgs.contract
        const srcChainId = taskArgs.schain
        const proofType = taskArgs.proof
        const userApp = taskArgs.ua
        const confirmations = taskArgs.conf
        let {owner, zkOracle} = await connect(ethers, contract)

        const cost = await zkOracle.assignJob(
            srcChainId,
            proofType,
            confirmations,
            userApp
        )

        console.log("Cost: ", cost);
})

task("getFee")
    .addParam('contract', 'contract address')
    .addParam('schain', 'source chain ID')
    .addParam('proof', 'type of proof to be used')
    .addParam('conf', 'number of confirmations')
    .addParam('ua', 'user application address')
    .setAction(async (taskArgs, {ethers, run}) => {
        const contract = taskArgs.contract
        const srcChainId = taskArgs.schain
        const proofType = taskArgs.proof
        const userApp = taskArgs.ua
        const confirmations = taskArgs.conf
        
        let {owner, zkOracle} = await connect(ethers, contract)

        const cost = await zkOracle.getFee(
            srcChainId,
            proofType,
            confirmations,
            userApp
        )

        console.log("Cost:", cost)
})

task("withdrawFee")
    .addParam('contract', 'contract address')
    .addParam('to', 'target address')
    .addParam('amount', 'amount withdraw')
    .setAction(async (taskArgs, {ethers, run}) => {
        const contract = taskArgs.contract
        const to = taskArgs.to
        const amount = taskArgs.amount
        let {owner, zkOracle} = await connect(ethers, contract)

        await zkOracle.withdrawFee(
            to,
            amount
        )
})