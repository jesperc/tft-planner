import { getChampionTierColor, getBuffFilterColor, getBuffBorderColor } from './colors'
import { ChampionTier } from '../models/champion'
import { BuffType } from '../models/buff'

describe('colors', () => {
  describe('getChampionTierColor', () => {
    it('does not throw exception', () => {
      expect(() => {
        getChampionTierColor(ChampionTier.One)
      }).not.toThrow()
    })
    it('throws exception', () => {
      expect(() => {
        getChampionTierColor(ChampionTier.__length)
      }).toThrow()
    })
  })
  describe('getBuffBorderColor', () => {
    it('does not throw exception', () => {
      expect(() => {
        getBuffBorderColor(BuffType.bronze)
      }).not.toThrow()
    })
    it('throws exception', () => {
      expect(() => {
        getBuffBorderColor(BuffType.__length)
      }).toThrow()
    })
  })
  describe('getBuffFilterColor', () => {
    it('does not throw exception', () => {
      expect(() => {
        getBuffFilterColor(BuffType.bronze)
      }).not.toThrow()
    })
    it('throws exception', () => {
      expect(() => {
        getBuffFilterColor(BuffType.__length)
      }).toThrow()
    })
  })
})
