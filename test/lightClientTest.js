const Hardhat = require("hardhat");
const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");


describe('zkOracle tests', function () {

  describe('end2end - Success', function () {
    
    it("Test", async function () {
        let [signer1] = await ethers.getSigners();

        /* ======================= DEPLOY LightClientUpdateGen ======================= */
        const LightClientUpdateGen = await ethers.getContractFactory("LightClientUpdateGen");
        const lightClientUpdateGen = await LightClientUpdateGen.deploy();
        await lightClientUpdateGen.deployed();

        const someCustomUserApplicationAddress = lightClientUpdateGen.address;
        const someNotUsedAddress = lightClientUpdateGen.address;
        const someCustom32Bytes = '0x00000000000000000000000000000000000000000000000000000000000000AA';

        /* ======================= DEPLOY EthereumLightClient ======================= */
        const EthereumLightClient = await ethers.getContractFactory("EthereumLightClient");
        const ethereumLightClient = await EthereumLightClient.deploy(
          someNotUsedAddress, // placeholderVerifier
          someNotUsedAddress, // step
          someNotUsedAddress, // rotate
          someCustom32Bytes, // genesisValidatorsRoot,
          11, // genesisTime,
          11, // secondsPerSlot,
          11, // slotsPerPeriod,
          11, // syncCommitteePeriod,
          someCustom32Bytes, // syncCommitteePoseidon,
          11, //  sourceChainId,
          11 //  finalityThreshold
        );
        await ethereumLightClient.deployed();

        let updateData = await lightClientUpdateGen.gen();
        events = await ethereumLightClient.step(updateData);
       
    });
  })
});