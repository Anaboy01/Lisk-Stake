import { useContext } from "react"
import Web3Context from "../../context/Web3Context"

const ConnectedNetwork = () => {
  const {chainId} = useContext(Web3Context)
  if (chainId === 4202){
      return <p>Connected Network: Lisk Sepolia</p>
  }else{
      return <p>Connected Network: Unsupported</p>
  }
}

export default ConnectedNetwork