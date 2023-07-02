import {task} from 'hardhat/config'


task("verify-etherscan", "Verify deployed contract on Etherscan")
    .addParam("contract", "Contract address deployed")
    .setAction(async (taskArgs, hre) => {
        try {
            await hre.run("verify:verify", {
                address: taskArgs.contract,
                contract: 'contracts/oracle/zkOracle.sol:zkOracle'
        })
        } catch ({ message }) {
            console.error(message)
    }
})