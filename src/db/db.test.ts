import { OriginType } from '../models/origin'
import { RoleType } from '../models/role'
import db from '../db/db'
import { ItemType } from '../models/item'

describe('db', () => {
  describe('getItemByType', () => {
    it('returns item by type', () => {
      expect(() => {
        db.getItemByType(ItemType.zephyr)
      }).not.toThrow()
    })
    it('throws exception if none found', () => {
      expect(() => {
        db.getItemByType(ItemType.__length)
      }).toThrow()
    })
  })
  describe('getAllItems', () => {
    it('returns a list', () => {
      const items = db.getAllItems()
      expect(items.length).toBeTruthy()
    })
  })
  describe('getAllItemCombinations', () => {
    it('returns a list', () => {
      const itemCombinations = db.getAllChampions()
      expect(itemCombinations.length).toBeTruthy()
    })
  })
  describe('getAllChampions', () => {
    it('returns a list', () => {
      const champions = db.getAllChampions()
      expect(champions.length).toBeTruthy()
    })
  })
  describe('getChampionById', () => {
    it('returns champion by id', () => {
      expect(() => {
        const champion = db.getAllChampions()[0]
        db.getChampionById(champion.id)
      }).not.toThrow()
    })
    it('throws exception if none found', () => {
      expect(() => {
        db.getChampionById('invalid-champion-id')
      }).toThrow()
    })
  })
  describe('getAllOrigins', () => {
    it('returns a list', () => {
      const origins = db.getAllOrigins()
      expect(origins.length).toBeTruthy()
    })
  })
  describe('getOriginByType', () => {
    it('returns origin by type', () => {
      expect(() => {
        db.getOriginByType(OriginType.shadow)
      }).not.toThrow()
    })
    it('throws exception if none found', () => {
      expect(() => {
        db.getOriginByType(OriginType.__length)
      }).toThrow()
    })
  })
  describe('getOriginById', () => {
    it('returns origin by id', () => {
      expect(() => {
        const origin = db.getOriginByType(OriginType.cloud)
        db.getOriginById(origin.id)
      }).not.toThrow()
    })
    it('throws exception if none found', () => {
      expect(() => {
        db.getOriginById('invalid-origin-id')
      }).toThrow()
    })
  })
  describe('getAllRoles', () => {
    it('returns a list', () => {
      const roles = db.getAllRoles()
      expect(roles.length).toBeTruthy()
    })
  })
  describe('getRoleByType', () => {
    it('returns role by type', () => {
      expect(() => {
        db.getRoleByType(RoleType.alchemist)
      }).not.toThrow()
    })
    it('throws exception if none found', () => {
      expect(() => {
        db.getRoleByType(RoleType.__length)
      }).toThrow()
    })
  })
  describe('getRoleById', () => {
    it('returns role by id', () => {
      expect(() => {
        const role = db.getRoleByType(RoleType.alchemist)
        db.getRoleById(role.id)
      }).not.toThrow()
    })
    it('throws exception if none found', () => {
      expect(() => {
        db.getRoleById('invalid-role-id')
      }).toThrow()
    })
  })
})
