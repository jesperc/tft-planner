import { itemTypeToString, ItemType } from './item'

describe('item', () => {
  describe('itemTypeToString', () => {
    it('must not throw on valid type', () => {
      expect(() => {
        itemTypeToString(ItemType.wardensMail)
      }).not.toThrow()
    })
    it('must throw on invalid type', () => {
      expect(() => {
        itemTypeToString(ItemType.__length)
      }).toThrow()
    })
  })
})
