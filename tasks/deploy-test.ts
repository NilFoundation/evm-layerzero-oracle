import {task} from 'hardhat/config'
import * as fs from 'fs';

task("deploy-test")
    .setAction(async (taskArgs, {ethers, run}) => {
        const jsonString = fs.readFileSync('tasks/input_data/test-deploy.json', 'utf-8');
        const settings = JSON.parse(jsonString);

        // ===================== DEPLOY ULN =====================
        console.log("Deploy LayerZero mock ULN...")
        const EthereumLayerZeroUltraLightNodeV2 = 
            await ethers.getContractFactory("EthereumLayerZeroUltraLightNodeV2");
        const ethereumLayerZeroUltraLightNodeV2 = 
            await EthereumLayerZeroUltraLightNodeV2.deploy();
        await ethereumLayerZeroUltraLightNodeV2.deployed();
        console.log("LayerZero mock ULN deployed at: ", 
            ethereumLayerZeroUltraLightNodeV2.address)

        // ===================== DEPLOY Endpoint =====================
        // Deploy with a single userApp => ULN
        console.log("Deploy LayerZero mock endpoint...")
        const EthereumLayerZeroEndpoint = await ethers.getContractFactory("EthereumLayerZeroEndpoint");
        const ethereumLayerZeroEndpoint = await EthereumLayerZeroEndpoint.deploy(
            [settings.endpoint.userApp.address],
            [ethereumLayerZeroUltraLightNodeV2.address]
        );
        await ethereumLayerZeroEndpoint.deployed();
        console.log("LayerZero mock endpoint deployed at: ", ethereumLayerZeroEndpoint.address)
    
        // ===================== DEPLOY LightClientUpdateGen =====================
        console.log("Deploy LightClientUpdateGen...")
        const LightClientUpdateGen = await ethers.getContractFactory("LightClientUpdateGen");
        const lightClientUpdateGen = await LightClientUpdateGen.deploy();
        await lightClientUpdateGen.deployed();
        console.log("LightClientUpdateGen at: ", ethereumLayerZeroEndpoint.address)
    
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
            ethereumLayerZeroEndpoint.address, 
            [ethereumLayerZeroUltraLightNodeV2.address]
        );
        await zkOracle.deployed();
        console.log("zkOracle at: ", zkOracle.address);

        await zkOracle.setLightClient(
            ethereumLightClient.address,
            settings.endpoint.userApp.address
        );
})