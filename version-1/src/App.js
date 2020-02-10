import React, { useState } from 'react'

import './assets/css/reset.css'
import Layout from './Layout/Layout'

function App() {
  const [ store, setStore ] = useState({
    players: [
      {
        name: 'Kasper',
        health: 20,
      },
      {
        name: 'Ebbe',
        health: 20,
      },
    ],
    isCommander: false,
    usePoison: false,
    startHealth: 20,
  })

  return (
    <Layout>
      <div />
    </Layout>
  )
}

export default App
