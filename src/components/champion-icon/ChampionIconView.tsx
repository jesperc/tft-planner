import React from 'react'
import './ChampionIcon.scss'

export interface ChampionIconViewProps {
  id: string
  style: any
  image: string
  className?: string
  selected: boolean
  onClick: Function
}

const ChampionIconView: React.FC<ChampionIconViewProps> = ({
  id,
  style,
  image,
  className,
  onClick,
  selected,
}) => {
  return (
    <img
      alt="champion"
      className={`champion-icon ${className || ''} ${selected ? 'champion-icon-selected' : ''}`}
      style={style}
      src={image}
      onClick={() => onClick(id)}
    ></img>
  )
}

export default ChampionIconView
