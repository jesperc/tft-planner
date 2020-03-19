import React from 'react'
import ReactTooltip from 'react-tooltip'
import './App.css'
import ChampionGrid from './components/champion-grid'
import ItemGrid from './components/item-grid'

const App = () => {
  return (
    <>
      <h1>Teamfight Tactics Planner</h1>
      <ChampionGrid />
      <ItemGrid />
      <ReactTooltip place="right" html={true} />
    </>
  )
}

export default App
