import {ethers, Contract} from 'ethers';
import stakingAbi from '../ABI/stakingAbi.json'
import stakingTokenAbi from '../ABI/stakeTokenAbi.json'



export const connectWallet = async () => {
 try {
      let [signer, provider, stakingContract, stakeTokenContract,chainId] = [null, null, null, null, null]
      if(window.ethereum === null){
            throw new Error("Metamask is not installed")
      }
      const accounts = await window.ethereum.request({
            method:"eth_requestAccounts"
      })

      let chainIdHex = await window.ethereum.request({
            method:'eth_chainId'
      })

      chainId = parseInt(chainIdHex, 16)

      let selectedAccount = accounts[0];
      if(!selectedAccount){
            throw new Error('no ethereum accounts is available')
      }

      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner()

      const stakingContractAddress="0x7eB01d5355d0bfBE7e0c6c04D7A31c46B690ad19"
      const stakeTokenContractAddress = '0xFC8710B398691f7C20cAF5C256aB810db35D26eD'


      stakingContract = new Contract(stakingContractAddress, stakingAbi, signer)

      stakeTokenContract = new Contract(stakeTokenContractAddress, stakingTokenAbi, signer)

      return {provider, selectedAccount, stakeTokenContract, stakingContract,chainId}




      
 } catch (error) {
      console.error(error);
      throw error
      
 }
}




//Reward Token: 0xCe39E4FB5F76cb125d1F73eb32C58d08b72B80ad
//0xCe39E4FB5F76cb125d1F73eb32C58d08b72B80ad