import {task} from 'hardhat/config'

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
    .addParam('proof', 'type of proof to be used')
    .addParam('ua', 'user application address')
    .addParam('update', 'update structure')
    .setAction(async (taskArgs, {ethers, run}) => {
        const contract = taskArgs.contract
        const srcChainId = taskArgs.schain
        const proofType = taskArgs.proof
        const userApp = taskArgs.ua
        const lcUpdate = taskArgs.update
        
        let {owner, zkOracle} = await connect(ethers, contract)

        await zkOracle.processRequest(
            srcChainId,
            proofType,
            userApp,
            lcUpdate
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