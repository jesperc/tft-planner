import React from 'react'
import './App.css'
import ChampionGrid from './components/champion-grid'
import ItemGrid from './components/item-grid'
const App = () => {
  return (
    <>
      <h1>Teamfight Tactics Planner</h1>
      <ChampionGrid />
      <ItemGrid />
    </>
  )
}

export default App
