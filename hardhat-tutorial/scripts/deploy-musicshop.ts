import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import hre from 'hardhat';


const func: DeployFunction = async function(hre:HardhatRuntimeEnvironment){
    const{deployments, getNamedAccounts} = hre;

    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    await deploy('MusicShop', {
        from: deployer,
        log: true,
    })
    
};

export default func;
func.tags = ['MusicShop'];