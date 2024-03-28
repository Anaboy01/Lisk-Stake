import {useState, useEffect, useContext} from 'react'
import Web3Context from '../../context/Web3Context'
import {ethers} from 'ethers'

const StakedAmount = () => {
      const {stakingContract, selectedAccount} = useContext(Web3Context)

      const [stakedAmount, setStakedAmount]  = useState('0')

      useEffect(() => {
            const fetchStakedBalance = async () => {
                  try {
                      const amountStaked = await stakingContract.stakedBalance(selectedAccount)  
                      console.log(amountStaked)
                  } catch (error) {
                        console.error("Error Fetching data:", error.message)
                  }
            }

            stakingContract && fetchStakedBalance()
      }, [stakingContract,selectedAccount])

}

export default StakedAmount