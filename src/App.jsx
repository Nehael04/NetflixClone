import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './components/Home'
// import Testing2 from './components/Testing2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      {/* <Testing2/> */}
    </>
  )
}

export default App
