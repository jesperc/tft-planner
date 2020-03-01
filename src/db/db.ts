// TODO: fetch data from backend
import seed from './seed/seed'
import { ItemType, Item } from '../models/item'
import { ItemCombination } from '../models/item-combination'
import { Champion } from '../models/champion'
import { Origin, OriginType } from '../models/origin'
import { Role, RoleType } from '../models/role'

interface IDB {
  getAllItems(): Item[]
  getItemByType(type: ItemType): Item
  getAllItemCombinations(): ItemCombination[]
  getAllChampions(): Champion[]
  getChampionById(id: string): Champion
  getAllOrigins(): Origin[]
  getOriginByType(type: OriginType): Origin
  getOriginById(id: string): Origin
  getAllRoles(): Role[]
  getRoleByType(type: RoleType): Role
  getRoleById(id: string): Role
}

class DB implements IDB {
  private champions: Champion[] = []
  private origins: Origin[] = []
  private roles: Role[] = []
  private items: Item[] = []
  private itemCombinations: ItemCombination[] = []

  constructor() {
    seed(this.champions, this.origins, this.roles, this.items, this.itemCombinations)
  }

  getAllItems = (): Item[] => {
    return this.items.slice(0)
  }

  getItemByType = (type: ItemType): Item => {
    const result = this.items.find(item => item.type === type)
    if (!result) {
      throw new Error(`Couldn't find item with type ${type.toString()}`)
    }
    return result
  }

  getAllItemCombinations = (): ItemCombination[] => {
    return this.itemCombinations.slice(0)
  }

  getAllChampions = (): Champion[] => {
    return this.champions.slice(0)
  }

  getChampionById = (id: string): Champion => {
    const result = this.champions.find(champion => champion.id === id)
    if (!result) {
      throw new Error(`Couldn't find champion with id ${id}`)
    }
    return result
  }

  getAllOrigins = (): Origin[] => {
    return this.origins.slice(0)
  }

  getOriginByType = (type: OriginType): Origin => {
    const result = this.origins.find(origin => origin.type === type)
    if (!result) {
      throw new Error(`Couldn't find origin with type ${type.toString()}`)
    }
    return result
  }

  getOriginById(id: string): Origin {
    const result = this.origins.find(origin => origin.id === id)
    if (!result) {
      throw new Error(`Couldn't find origin with id ${id}`)
    }
    return result
  }

  getAllRoles = () => {
    return this.roles.slice(0)
  }

  getRoleByType = (type: RoleType) => {
    const result = this.roles.find(role => role.type === type)
    if (!result) {
      throw new Error(`Couldn't find role with type ${type.toString()}`)
    }
    return result
  }

  getRoleById = (id: string): Role => {
    const result = this.roles.find(role => role.id === id)
    if (!result) {
      throw new Error(`Couldn't find role with id ${id}`)
    }
    return result
  }
}

const db = new DB()
export default db as IDB
