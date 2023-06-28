const Hardhat = require("hardhat");
const { ethers, upgrades } = require("hardhat");



describe('zkOracle tests', function () {

  describe('end2end - Success', function () {
    
    it("Test", async function () {
        let [signer1] = await ethers.getSigners();
        const source_chain_id = Hardhat.network.config.chainId;
        const target_chain_id = source_chain_id;
        const magicNumberForEthLightClientProofSystem = 0xAABBCCDD;
        const testSlot = 0x45;

        /* ======================= DEPLOY EthereumLayerZeroEndpoint ======================= */
        const EthereumLayerZeroEndpoint = await ethers.getContractFactory("EthereumLayerZeroEndpoint");
        const ethereumLayerZeroEndpoint = await EthereumLayerZeroEndpoint.deploy();
        await ethereumLayerZeroEndpoint.deployed();

        /* ======================= DEPLOY EthereumLayerZeroUltraLightNodeV2 ======================= */
        const EthereumLayerZeroUltraLightNodeV2 = await ethers.getContractFactory("EthereumLayerZeroUltraLightNodeV2");
        const ethereumLayerZeroUltraLightNodeV2 = await EthereumLayerZeroUltraLightNodeV2.deploy();
        await ethereumLayerZeroUltraLightNodeV2.deployed();

        /* ======================= DEPLOY EthereumLightClient ======================= */
    //    const EthereumLightClient = await ethers.getContractFactory("EthereumLightClient");
    //    const ethereumLightClient = await EthereumLightClient.deploy();
    //    await ethereumLightClient.deployed();

        /* ======================= DEPLOY zkOracle ======================= */
        const ZKOracle = await ethers.getContractFactory("zkOracle");
        const zkOracle = await ZKOracle.deploy(ethereumLayerZeroEndpoint.address, []);
        await zkOracle.deployed();

    });
  })
});