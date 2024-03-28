import { useState } from 'react'
import './App.css'
import Wallet from './components/wallet/Wallet'
import Navigation from './components/navigation/Navigation'
import DisplayPannel from './components/displayPanel/DisplayPannel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Wallet>
        <Navigation/>
        <DisplayPannel/>
      </Wallet>
    </>
  )
}

export default App
