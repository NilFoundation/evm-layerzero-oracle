const Hardhat = require("hardhat");
const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");
//const ensRegistryCompiled = requires('@nilfoundation/evm-lorem-ipsum/artifacts/contracts/registry/ENSRegistry.sol/ENSRegistry.json');


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


    async function deployLayerZeroEndpoint(chainID) {
        const LayerZeroEndpoint = await ethers.getContractFactory("Endpoint");
        const layerZeroEndpoint = await LayerZeroEndpoint.deploy(chainID);
        await layerZeroEndpoint.deployed();

        return layerZeroEndpoint;
    }

    async function deployLayerZeroULN(endpoint, nonceAddress, chainID) {
        const LayerZeroULN = await ethers.getContractFactory("UltraLightNodeV2");
        const layerZeroULN = await LayerZeroULN.deploy(endpoint, nonceAddress, chainID);
        await layerZeroULN.deployed();

        return layerZeroULN;
    }

    async function deployLayerZeroNonceContract(endpoint) {
        const LayerZeroNonceContract = await ethers.getContractFactory("NonceContract");
        const layerZeroNonceContract = await LayerZeroNonceContract.deploy(endpoint);
        await layerZeroNonceContract.deployed();

        return layerZeroNonceContract;
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
            
            const srcChainId = 0x10;
            const dstChainId = 0x20;
            const destinationContractAddress = ethers.utils.formatBytes32String("345");
            const refundAddress = '0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1';
            const zroPaymentAddress = '0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1';
            const remoteULN_address = ethers.utils.formatBytes32String("345");
            const remoteAddressSize = 32;
            const payload = ethers.utils.formatBytes32String("AABBCCDDEEFFAABBCCDDEEFF");;

            let layerZeroSourceEndpoint = await deployLayerZeroEndpoint(srcChainId);
            
            let layerZeroSourceNonceContract = await deployLayerZeroNonceContract(
                layerZeroSourceEndpoint.address
            );

            let layerZeroSourceULN = await deployLayerZeroULN(
                layerZeroSourceEndpoint.address,
                layerZeroSourceNonceContract.address,
                srcChainId
            );



            // Endpoint settings ==============================
            var set_version = await layerZeroSourceEndpoint.newVersion(
                layerZeroSourceULN.address
            )
            console.log(await set_version.wait())

            var set_def_version = await layerZeroSourceEndpoint.setDefaultSendVersion(
                1
            )
            console.log(await set_def_version.wait())
            
            // ULN settings ==============================
            var setRemoteUln = await layerZeroSourceULN.setRemoteUln(
                dstChainId,
                remoteULN_address
            )
            console.log(await setRemoteUln.wait())

            var setChainAddressSize = await layerZeroSourceULN.setChainAddressSize(
                dstChainId,
                remoteAddressSize
            )
            console.log(await setChainAddressSize.wait())

            

            var send_data = await layerZeroSourceEndpoint.send(
                dstChainId, // _dstChainId
                destinationContractAddress, // _dstChainId
                payload, // _payload
                refundAddress, // _refundAddress
                zroPaymentAddress, // _zroPaymentAddress
                [] // _adapterParams
            )

            logs = await send_data.wait();
            packet = logs.events[0].data
            console.log(packet)
            //[ 'uint64', 'uint16', 'address', 'uint16', 'bytes', 'bytes'],

            var a = ethers.utils.defaultAbiCoder.decode(
                [ 'bytes'],
                packet
            )
            var b = ethers.utils.defaultAbiCoder.decode(
                ['uint64', 'uint16', 'address', 'uint16', 'bytes', 'bytes'],
                a[0]
            )
            console.log(b)

            // 2 -- index of MagicCodeVerify event
            //expect(events_data[2].data == 0xAABBCCDDEEFF).to.equal(true);

        });
    })
});