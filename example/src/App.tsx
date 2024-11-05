import React, { useEffect } from 'react'
import NeoTekSdkModule, { Counter } from 'neotek-mobile-ob-sdk'

const App = () => {
  useEffect(() => {
    console.log(NeoTekSdkModule)
  })

  return <Counter />
}

export default App
