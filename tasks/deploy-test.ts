import {task} from 'hardhat/config'
import * as fs from 'fs';

task("deploy-test")
    .setAction(async (taskArgs, {ethers, run}) => {
        await run("compile");
        const jsonString = fs.readFileSync('tasks/test_data/deploy.json', 'utf-8');
        const settings = JSON.parse(jsonString);
        const endpoint_address = settings.endpoint;
        const uln = settings.uln;

        const ZKOracle = await ethers.getContractFactory("zkOracle");
        const zkOracle = await ZKOracle.deploy(
            endpoint_address,
            uln
        );
        await zkOracle.deployed();
    
        console.log("zkOracle Deployed to :", zkOracle.address);
        return zkOracle.address;
})