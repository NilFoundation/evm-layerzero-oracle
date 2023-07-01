const hre = require('hardhat')
const {getNamedAccounts} = hre

module.exports = async function () {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;
    const {deployer, tokenOwner} = await getNamedAccounts();

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
}

module.exports.tags = ['zkOracleFixture']