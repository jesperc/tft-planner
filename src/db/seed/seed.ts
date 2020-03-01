import addChampions from './addChampions'
import addOrigins from './addOrigins'
import addRoles from './addRoles'
import addItems from './addItems'
import addItemCombinations from './addItemCombination'
import { Champion } from '../../models/champion'
import { Origin } from '../../models/origin'
import { Role } from '../../models/role'
import { ItemCombination } from '../../models/item-combination'
import { Item } from '../../models/item'

const seed = (
  champions: Champion[],
  origins: Origin[],
  roles: Role[],
  items: Item[],
  itemCombinations: ItemCombination[],
) => {
  addChampions(champions)
  addOrigins(origins)
  addRoles(roles)
  addItems(items)
  addItemCombinations(itemCombinations, items)
}

export default seed
