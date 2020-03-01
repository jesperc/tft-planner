import React from 'react'
import db from '../../db/db'
import { getChampionTierColor } from '../../db/colors'
import ChampionIconView from './ChampionIconView'

export interface ChampionIconContainerProps {
  id: string
  selected: boolean
  className?: string
  onClick: Function
}

const ChampionIconContainer: React.FC<ChampionIconContainerProps> = ({
  id,
  selected,
  className,
  onClick,
}) => {
  const champion = db.getChampionById(id)
  const tierColor = getChampionTierColor(champion.tier)
  const style = { border: `1px solid ${tierColor}` }

  return (
    <ChampionIconView
      className={className}
      selected={selected}
      style={style}
      image={champion.image}
      id={champion.id}
      onClick={onClick}
    />
  )
}

export default ChampionIconContainer
