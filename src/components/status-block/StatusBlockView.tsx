import React from 'react'
import StatusText from '../status-text'
import './StatusBlock.scss'
import Buff from '../../models/buff'

export interface StatusBlockViewProps {
  statuses: Status[]
}

export type Status = {
  id: string
  count: number
  image: string
  displayName: string
  buffs: Buff[]
  tooltip: string
}

const StatusBlockView: React.FC<StatusBlockViewProps> = ({ statuses }) => {
  return (
    <div className="status-block">
      {statuses.map(status => (
        <StatusText
          key={`status-text-${status.id}`}
          count={status.count}
          image={status.image}
          displayName={status.displayName}
          buffs={status.buffs}
          tooltip={status.tooltip}
        />
      ))}
    </div>
  )
}

export default StatusBlockView
