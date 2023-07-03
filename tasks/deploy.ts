import {task} from 'hardhat/config'
import * as fs from 'fs';

task("deploy")
    .setAction(async (taskArgs, {ethers, run}) => {
        const jsonString = fs.readFileSync('tasks/input_data/deploy.json', 'utf-8');
        const settings = JSON.parse(jsonString);

        // ===================== DEPLOY EthereumLightClient =====================
        console.log("Deploy EthereumLightClient...")
        const EthereumLightClient = await ethers.getContractFactory("EthereumLightClient");
        const ethereumLightClient = await EthereumLightClient.deploy(
            settings.zkLightClients[0].deploy.placeholderVerifier,
            settings.zkLightClients[0].deploy.step,
            settings.zkLightClients[0].deploy.rotate,
            settings.zkLightClients[0].deploy.genesisValidatorsRoot,
            settings.zkLightClients[0].deploy.genesisTime,
            settings.zkLightClients[0].deploy.secondsPerSlot,
            settings.zkLightClients[0].deploy.slotsPerPeriod,
            settings.zkLightClients[0].deploy.syncCommitteePeriod,
            settings.zkLightClients[0].deploy.syncCommitteePoseidon,
            settings.zkLightClients[0].deploy.sourceChainId,
            settings.zkLightClients[0].deploy.finalityThreshold
        );
        await ethereumLightClient.deployed();
        console.log("EthereumLightClient at: ", ethereumLightClient.address)

        // ===================== DEPLOY zkOracle =====================
        console.log("Deploy zkOracle...")
        const ZKOracle = await ethers.getContractFactory("zkOracle");
        const zkOracle = await ZKOracle.deploy(
            ethereumLightClient.address, 
            [settings.endpoint.userApp.address]
        );
        await zkOracle.deployed();
        console.log("zkOracle at: ", zkOracle.address)
})