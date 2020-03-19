import React from 'react'
import Buff, { BuffType } from '../../models/buff'
import { getBuffFilterColor, getBuffBorderColor } from '../../db/colors'
import StatusTextView from './StatusTextView'

export interface StatusTextContainerProps {
  count: number
  displayName: string
  image: string
  buffs: Buff[]
  tooltip: string
}

const StatusTextContainer: React.FC<StatusTextContainerProps> = ({
  count,
  displayName,
  image,
  buffs,
  tooltip = '',
}) => {
  const bestBuffType = Buff.getBestType(count, buffs)
  const filter = getBuffFilterColor(bestBuffType)
  const borderColor = getBuffBorderColor(bestBuffType)
  const buffString = buffs
    .map(buff => buff.requiredCount)
    .sort()
    .join(', ')

  const style = {
    opacity: bestBuffType === BuffType.none ? 0.3 : 1,
  }

  const imageStyle = {
    filter,
    border: `1px solid ${borderColor}`,
  }

  return (
    <StatusTextView
      style={style}
      imageStyle={imageStyle}
      image={image}
      count={count}
      displayName={displayName}
      buffs={buffString}
      tooltip={tooltip}
    />
  )
}

export default StatusTextContainer
