import React, { useState } from 'react'
import ChampionGridView from './ChampionGridView'
import db from '../../db/db'
import getIdsFromQueryParams from './getIdsFromQueryParams'

export interface ChampionGridContainerProps {}

const ChampionGridContainer: React.FC<ChampionGridContainerProps> = () => {
  const ids = getIdsFromQueryParams()

  const [selectedIds, setSelectedIds] = useState(ids)

  const onSelect = (id: string) => {
    let newSelectedIds: string[] = []
    if (selectedIds.find(x => x === id)) {
      newSelectedIds = [...selectedIds.filter(x => x !== id)]
    } else {
      newSelectedIds = [...selectedIds]
      newSelectedIds.push(id)
    }
    setSelectedIds(newSelectedIds)
    updateUrl(newSelectedIds)
  }

  const onClear = () => {
    clearUrl()
    setSelectedIds([])
  }

  const clearUrl = () => {
    window.history.replaceState({}, '', process.env.REACT_APP_RESET_ROUTE || '/')
  }

  const getUrl = (selected: string[]) => {
    const ids = selected.join(',')
    return `${process.env.REACT_APP_HOST}${ids.length > 0 ? `?ids=${ids}` : ''}`
  }

  const updateUrl = (selected: string[]) => {
    const url = getUrl(selected)
    if (url.indexOf('?') > 0) {
      window.history.replaceState({}, '', url.substr(url.indexOf('?'), url.length))
    }
  }

  const props = {
    roles: db.getAllRoles(),
    origins: db.getAllOrigins(),
    champions: db.getAllChampions(),
    selectedIds,
    onSelect,
    onClear,
  }

  return <ChampionGridView {...props} />
}

export default ChampionGridContainer
