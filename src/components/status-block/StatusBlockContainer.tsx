import React from 'react'
import db from '../../db/db'
import StatusBlockView, { Status } from './StatusBlockView'
import { RoleType } from '../../models/role'
import { OriginType } from '../../models/origin'
import Buff from '../../models/buff'

export interface StatusBlockProps {
  selectedIds: string[]
}

const countProperties = (obj: any) => {
  return obj.reduce((acc: any, curr: any) => {
    if (acc[curr] == null) {
      acc[curr] = 1
    } else {
      acc[curr] += 1
    }
    return acc
  }, {})
}

const StatusBlockContainer: React.FC<StatusBlockProps> = ({ selectedIds }) => {
  const champions = selectedIds.map(id => db.getChampionById(id))

  const origins = champions.flatMap(champion => champion.origins)
  const roles = champions.flatMap(champion => champion.roles)
  const roleObject: any = countProperties(roles)
  const originObject: any = countProperties(origins)

  const roleList = Object.keys(roleObject).map(key => ({
    role: db.getRoleByType(parseInt(key) as RoleType),
    count: roleObject[key],
  }))
  const originList = Object.keys(originObject).map(key => ({
    origin: db.getOriginByType(parseInt(key) as OriginType),
    count: originObject[key],
  }))

  const statuses = roleList
    .map(
      role =>
        ({
          id: role.role.id,
          count: role.count,
          image: role.role.image,
          buffs: role.role.buffs,
          displayName: role.role.displayName,
        } as Status),
    )
    .concat(
      originList.map(
        origin =>
          ({
            id: origin.origin.id,
            count: origin.count,
            image: origin.origin.image,
            buffs: origin.origin.buffs,
            displayName: origin.origin.displayName,
          } as Status),
      ),
    )
    .sort((a: Status, b: Status) => {
      return Buff.getBestType(a.count, a.buffs) >= Buff.getBestType(b.count, b.buffs) ? -1 : 1
    })

  return <StatusBlockView statuses={statuses} />
}

export default StatusBlockContainer
