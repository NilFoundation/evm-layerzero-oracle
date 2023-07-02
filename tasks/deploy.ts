import {task} from 'hardhat/config'


task("deploy")
    .addParam('endpoint', 'LayerZero endpoint address')
    .addParam('uln', 'Array of ULNs')
    .setAction(async (taskArgs, {ethers, run}) => {
        await run("compile");
        const [owner] = await ethers.getSigners();
    
        const ZKOracle = await ethers.getContractFactory("zkOracle");
        const zkOracle = await ZKOracle.deploy(
            taskArgs.endpoint,
            taskArgs.uln.split(",")
        );

        await zkOracle.deployed();
    
        console.log("zkOracle Deployed to :", zkOracle.address);
        return zkOracle.address;
})