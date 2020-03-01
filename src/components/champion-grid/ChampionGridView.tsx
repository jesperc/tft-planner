import React from 'react'
import ChampionIcon from '../champion-icon'
import { Role } from '../../models/role'
import { Origin, OriginType } from '../../models/origin'
import { Champion } from '../../models/champion'
import Icon from '../icon/Icon'
import './ChampionGrid.scss'
import SelectedChampions from '../selected-champions/SelectedChampions'

export interface ChampionGridViewProps {
  roles: Role[]
  origins: Origin[]
  champions: Champion[]
  selectedIds: string[]
  onSelect: Function
  onClear: Function
}

const renderRoles = (roles: Role[]) => {
  return roles.map(role => (
    <th key={role.id}>
      <Icon alt={role.displayName} image={role.image} />
    </th>
  ))
}

const renderOriginsAndTheirChampions = (
  champions: Champion[],
  origins: Origin[],
  roles: Role[],
  selected: string[],
  onSelect: Function,
) => {
  return origins.map(origin => (
    <tr key={origin.id}>
      <td>
        <Icon alt={origin.displayName} image={origin.image} />
      </td>
      {renderChampionIcons(champions, roles, selected, origin.type, onSelect)}
    </tr>
  ))
}

const renderChampionIcons = (
  champions: Champion[],
  roles: Role[],
  selected: string[],
  originType: OriginType,
  onSelect: Function,
) => {
  champions = champions.filter(champion => champion.origins.includes(originType))
  const jsx: JSX.Element[] = []
  roles.forEach(role => {
    const championsWithMatchingRole = champions
      .filter(champion => champion.roles.includes(role.type))
      .map(champion => (
        <ChampionIcon
          className="champion-grid-icon"
          key={champion.id}
          id={champion.id}
          selected={selected.includes(champion.id)}
          onClick={onSelect}
        />
      ))
    jsx.push(<td key={`role-row-${role.id}`}>{championsWithMatchingRole}</td>)
  })
  return jsx
}

const ChampionGridView: React.FC<ChampionGridViewProps> = ({
  roles,
  origins,
  champions,
  selectedIds: selected,
  onSelect,
  onClear,
}) => {
  return (
    <div className="champion-grid">
      <table>
        <tbody>
          <tr>
            <th></th>
            {renderRoles(roles)}
          </tr>
          {renderOriginsAndTheirChampions(champions, origins, roles, selected, onSelect)}
        </tbody>
      </table>
      <SelectedChampions selectedIds={selected} onClick={onSelect} onClear={onClear} />
    </div>
  )
}

export default ChampionGridView
