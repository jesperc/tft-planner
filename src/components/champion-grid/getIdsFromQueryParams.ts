import queryString from 'query-string'
import db from '../../db/db'

const getIdsFromQueryParams = () => {
  if (window.location.search.length > 0) {
    const query = queryString.parse(window.location.search)
    if (query && query.ids) {
      const list = query.ids as String
      const champions = db.getAllChampions()
      const ids = list.split(',').filter(id => champions.map(champion => champion.id).includes(id))
      return ids
    }
  }
  return []
}

export default getIdsFromQueryParams
