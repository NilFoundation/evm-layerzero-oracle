const Hardhat = require("hardhat");
const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");


describe('Light Client tests', function () {

    describe('Basic deploy and step - Success', function () {

        it("Run", async function () {
            let [signer1] = await ethers.getSigners();

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

            /* ======================= DEPLOY LightClientUpdateGen ======================= */
            const LightClientUpdateGen = await ethers.getContractFactory("LightClientUpdateGen");
            const lightClientUpdateGen = await LightClientUpdateGen.deploy();
            await lightClientUpdateGen.deployed();

            /* ======================= DEPLOY EthereumLightClient ======================= */
            const EthereumLightClient = await ethers.getContractFactory("EthereumLightClient");
            const ethereumLightClient = await EthereumLightClient.deploy(
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
            await ethereumLightClient.deployed();

            let updateData = await lightClientUpdateGen.gen();
            events = await ethereumLightClient.step(updateData);
        });
    })
});