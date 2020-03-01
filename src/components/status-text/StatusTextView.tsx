import React from 'react'
import './StatusText.scss'

export interface StatusTextViewProps {
  style: any
  imageStyle: any
  count: number
  displayName: string
  image: string
  buffs: string
}

const StatusTextView: React.FC<StatusTextViewProps> = ({
  style,
  imageStyle,
  count,
  displayName,
  image,
  buffs,
}) => {
  return (
    <p className="status-text" style={style}>
      <img className="status-text-image" style={imageStyle} alt="status" src={image} />
      <span>{`${count} ${displayName} (${buffs})`}</span>
    </p>
  )
}

export default StatusTextView
