const hre = require('hardhat')
const {getNamedAccounts} = hre

module.exports = async function () {
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

    lz_ultralightnode = (await hre.deployments.get('EthereumLayerZeroUltraLightNodeV2')).address;
    user_app = (await hre.deployments.get('UserAppMock')).address;

    await deploy('EthereumLayerZeroEndpoint', {
        from: deployer,
        args: [[user_app], [lz_ultralightnode]],
        log: true,
    });

    lz_endpoint = (await hre.deployments.get('EthereumLayerZeroEndpoint')).address;

    await deploy('zkOracle', {
        from: deployer,
        args: [lz_endpoint, [lz_ultralightnode]],
        log: true,
    });

    zkOracle =  await ethers.getContract("zkOracle");

    // deploy light client and link it to the oracle
    const verifierAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
    const genesisValidatorsRoot = '0x00000000000000000000000000000000000000000000000000000000000000AA';
    const EthereumLightClient = await ethers.getContractFactory("EthereumLightClient");
    const ethereumLightClient = await EthereumLightClient.deploy(
        verifierAddress, // placeholderVerifier
        verifierAddress, // step
        verifierAddress, // rotate
        genesisValidatorsRoot, // genesisValidatorsRoot,
        11, // genesisTime,
        11, // secondsPerSlot,
        11, // slotsPerPeriod,
        11, // syncCommitteePeriod,
        genesisValidatorsRoot, // syncCommitteePoseidon,
        11, //  sourceChainId,
        11 //  finalityThreshold
    );
    await ethereumLightClient.deployed();

    await zkOracle.setLightClient(ethereumLightClient.address, user_app);
}

module.exports.tags = ['zkOracleFixture']