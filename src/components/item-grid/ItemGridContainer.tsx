import React from 'react'
import { ItemCombinationType } from '../../models/item-combination'
import ItemGridView from './ItemGridView'
import db from '../../db/db'

export interface ItemGridContainerProps {}

const ItemGridContainer: React.FC<ItemGridContainerProps> = () => {
  const basicItems = db
    .getAllItems()
    .filter(item => item.combinationType === ItemCombinationType.none)
  const itemCombinations = db.getAllItemCombinations()

  return <ItemGridView basicItems={basicItems} itemCombinations={itemCombinations} />
}

export default ItemGridContainer
