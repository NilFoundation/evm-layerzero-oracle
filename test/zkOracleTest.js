const Hardhat = require("hardhat");
const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");


describe('zkOracle tests', function () {

    async function deployEthereumLayerZeroUltraLightNodeV2() {
        const EthereumLayerZeroUltraLightNodeV2 = await ethers.getContractFactory("EthereumLayerZeroUltraLightNodeV2");
        const ethereumLayerZeroUltraLightNodeV2 = await EthereumLayerZeroUltraLightNodeV2.deploy();
        await ethereumLayerZeroUltraLightNodeV2.deployed();

        return ethereumLayerZeroUltraLightNodeV2;
    }

    async function deployEthereumLayerZeroEndpoint(userApplications, ULNs) {
        const EthereumLayerZeroEndpoint = await ethers.getContractFactory("EthereumLayerZeroEndpoint");
        const ethereumLayerZeroEndpoint = await EthereumLayerZeroEndpoint.deploy(userApplications, ULNs);
        await ethereumLayerZeroEndpoint.deployed();

        return ethereumLayerZeroEndpoint;
    }

    async function deployLightClientUpdateGen() {
        const LightClientUpdateGen = await ethers.getContractFactory("LightClientUpdateGen");
        const lightClientUpdateGen = await LightClientUpdateGen.deploy();
        await lightClientUpdateGen.deployed();

        return lightClientUpdateGen;
    }

    async function deployEthereumLightClient(
        placeholderVerifier,
        step,
        rotate,
        genesisValidatorsRoot,
        genesisTime,
        secondsPerSlot,
        slotsPerPeriod,
        syncCommitteePeriod,
        syncCommitteePoseidon,
        sourceChainId,
        finalityThreshold
    ) {
        const EthereumLightClient = await ethers.getContractFactory("EthereumLightClient");
        const ethereumLightClient = await EthereumLightClient.deploy(
            placeholderVerifier,
            step,
            rotate,
            genesisValidatorsRoot,
            genesisTime,
            secondsPerSlot,
            slotsPerPeriod,
            syncCommitteePeriod,
            syncCommitteePoseidon,
            sourceChainId,
            finalityThreshold
        );
        await ethereumLightClient.deployed();

        return ethereumLightClient;
    }

    async function deployZKOracle(ethereumLayerZeroEndpoint, ULNs) {
        const ZKOracle = await ethers.getContractFactory("zkOracle");
        const zkOracle = await ZKOracle.deploy(ethereumLayerZeroEndpoint, ULNs);
        await zkOracle.deployed();

        return zkOracle;
    }


    describe('Full function - Success', function () {
        
        it("Emulates zkOracle that invokes on-chain hash update on ULN via zkLightClient and proof verification", async function () {
            
            const customUserApplicationAddress = '0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1';
            const placeholderVerifierAddress = '0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1';
            const stepAddress = '0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1';
            const rotateAddress = '0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1';
            const genesisValidatorsRoot = '0x00000000000000000000000000000000000000000000000000000000000000AA';
            const syncCommitteePoseidon = '0x00000000000000000000000000000000000000000000000000000000000000AA';

            const genesisTime = 0x10;
            const secondsPerSlot = 0x10;
            const slotsPerPeriod = 0x10;
            const syncCommitteePeriod = 0x10;
            const sourceChainId = 0x10;
            const finalityThreshold = 0x10;
            const srcChainId = 0x10;
            const proofType = 0x10;

            /* ======================= DEPLOY EthereumLayerZeroUltraLightNodeV2 ======================= */
            let ethereumLayerZeroUltraLightNodeV2 = await deployEthereumLayerZeroUltraLightNodeV2();

            /* ======================= DEPLOY EthereumLayerZeroEndpoint ======================= */
            let ethereumLayerZeroEndpoint = await deployEthereumLayerZeroEndpoint(
                [customUserApplicationAddress], 
                [ethereumLayerZeroUltraLightNodeV2.address]
            );

            /* ======================= DEPLOY LightClientUpdateGen ======================= */
            let lightClientUpdateGen = await deployLightClientUpdateGen();

            /* ======================= DEPLOY EthereumLightClient ======================= */
            let ethereumLightClient = await deployEthereumLightClient(
                placeholderVerifierAddress, // placeholderVerifier
                stepAddress, // step
                rotateAddress, // rotate
                genesisValidatorsRoot, // genesisValidatorsRoot,
                genesisTime, // genesisTime,
                secondsPerSlot, // secondsPerSlot,
                slotsPerPeriod, // slotsPerPeriod,
                syncCommitteePeriod, // syncCommitteePeriod,
                syncCommitteePoseidon, // syncCommitteePoseidon,
                sourceChainId, //  sourceChainId,
                finalityThreshold //  finalityThreshold
            );

            /* ======================= DEPLOY zkOracle ======================= */
            let zkOracle = await deployZKOracle(
                ethereumLayerZeroEndpoint.address, // Endpoint address
                [ethereumLayerZeroUltraLightNodeV2.address] // ULNs
            );


            await zkOracle.setLightClient(
                ethereumLightClient.address, //
                customUserApplicationAddress
            );


            let update_light_client_data = await lightClientUpdateGen.gen();
            events = await zkOracle.processRequest(
                srcChainId, 
                proofType, 
                customUserApplicationAddress, 
                update_light_client_data
            );

            logs_out = await events.wait()
            events_data = logs_out.events

            // 2 -- index of MagicCodeVerify event
            expect(events_data[2].data == 0xAABBCCDDEEFF).to.equal(true);

        });
    })
});