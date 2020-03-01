import { Item } from './item'

export enum ItemCombinationType {
  none,
  combined,
}

export type ItemCombination = {
  id: string
  a: Item
  b: Item
  result: Item
}
