import React from 'react'
import { Item } from '../../models/item'
import './ItemGrid.scss'
import { ItemCombination } from '../../models/item-combination'
import Icon from '../icon/Icon'

export interface ItemGridViewProps {
  basicItems: Item[]
  itemCombinations: ItemCombination[]
}

const combineItems = (item1: Item, item2: Item, itemCombinations: ItemCombination[]): Item => {
  const itemCombination = itemCombinations.find(
    combination => combination.a.id === item1.id && combination.b.id === item2.id,
  )
  if (!itemCombination) {
    throw new Error(`Couldn't find item combination of ${item1.type} to ${item2.type}`)
  }
  return itemCombination.result
}

const renderTopRow = (items: Item[]) => {
  return items.map(item => (
    <th key={`top-${item.id}`}>
      <Icon className="item-grid-icon" alt={item.displayName} image={item.image} />
    </th>
  ))
}

const renderRows = (basicItems: Item[], itemCombinations: ItemCombination[]) => {
  return basicItems.map((basicItem, index) => (
    <tr key={`row-${index}-${basicItem.id}`}>
      <td>
        <Icon alt={basicItem.displayName} image={basicItem.image} className="item-grid-icon" />
      </td>
      {basicItems
        .map(item => combineItems(item, basicItem, itemCombinations))
        .map(item => (
          <td key={`row-${index}-${item.id}`}>
            <Icon alt={item.displayName} image={item.image} className="item-grid-icon" />
          </td>
        ))}
    </tr>
  ))
}

const ItemGridView: React.FC<ItemGridViewProps> = ({ basicItems, itemCombinations }) => {
  return (
    <div className="item-grid">
      <table>
        <tbody>
          <tr>
            <th></th>
            {renderTopRow(basicItems)}
          </tr>
          {renderRows(basicItems, itemCombinations)}
        </tbody>
      </table>
    </div>
  )
}

export default ItemGridView
