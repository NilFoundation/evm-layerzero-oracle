import {task} from 'hardhat/config'
import * as fs from 'fs';

task("deploy")
    .setAction(async (taskArgs, {ethers, run}) => {
        const jsonString = fs.readFileSync('tasks/input_data/deploy.json', 'utf-8');
        const settings = JSON.parse(jsonString);
        const {deployments, getNamedAccounts} = hre;
        const {deploy} = deployments;
        const {deployer, userApp} = await getNamedAccounts();

        await deploy('EthereumLayerZeroUltraLightNodeV2', {
            from: deployer,
            args: [],
            log: true,
        });

        await deploy('UserAppMock', {
            from: deployer,
            args: [],
            log: true,
        });

        let lz_ultralightnode = (await hre.deployments.get('EthereumLayerZeroUltraLightNodeV2')).address;
        let user_app = (await hre.deployments.get('UserAppMock')).address;

        await deploy('EthereumLayerZeroEndpoint', {
            from: deployer,
            args: [[user_app], [lz_ultralightnode]],
            log: true,
        });

        let lz_endpoint = (await hre.deployments.get('EthereumLayerZeroEndpoint')).address;

        // ===================== DEPLOY EthereumLightClient =====================
        // console.log("Deploy EthereumLightClient...")
        // const EthereumLightClient = await ethers.getContractFactory("EthereumLightClient");
        // const ethereumLightClient = await EthereumLightClient.deploy(
        //     settings.zkLightClients[0].deploy.placeholderVerifier,
        //     settings.zkLightClients[0].deploy.step,
        //     settings.zkLightClients[0].deploy.rotate,
        //     settings.zkLightClients[0].deploy.genesisValidatorsRoot,
        //     settings.zkLightClients[0].deploy.genesisTime,
        //     settings.zkLightClients[0].deploy.secondsPerSlot,
        //     settings.zkLightClients[0].deploy.slotsPerPeriod,
        //     settings.zkLightClients[0].deploy.syncCommitteePeriod,
        //     settings.zkLightClients[0].deploy.syncCommitteePoseidon,
        //     settings.zkLightClients[0].deploy.sourceChainId,
        //     settings.zkLightClients[0].deploy.finalityThreshold
        // );
        // await ethereumLightClient.deployed();
        // console.log("EthereumLightClient at: ", ethereumLightClient.address)

        // ===================== DEPLOY zkOracle =====================
        console.log("Deploy zkOracle...")
        const ZKOracle = await ethers.getContractFactory("zkOracle");
        const zkOracle = await ZKOracle.deploy(
            // ethereumLightClient.address, 
            lz_endpoint,
            // "0xCDF713621F8Bab80AD7408aF4c2552AAB369A06b", // valid lz_endpoint address on sepolia
            // [settings.endpoint.userApp.address]
            ["0x3acaaf60502791d199a5a5f0b173d78229ebfe32"]
        );
        // valid predeployed light client address on sepolia
        await zkOracle.setLightClient("0x8A71089E03aC86794eB048951ce4989b8ACD699A", "0x2789"); 
        await zkOracle.deployed();
        console.log("zkOracle at: ", zkOracle.address)
})