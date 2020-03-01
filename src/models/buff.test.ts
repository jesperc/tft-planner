import Buff, { BuffType } from './buff'

describe('buff', () => {
  describe('getBestype', () => {
    it('returns bronze match', () => {
      const result = Buff.getBestType(2, [
        { requiredCount: 2, type: BuffType.bronze },
        { requiredCount: 4, type: BuffType.silver },
        { requiredCount: 6, type: BuffType.gold },
      ])
      expect(result).toBe(BuffType.bronze)
    })
    it('returns gold match', () => {
      const result = Buff.getBestType(7, [
        { requiredCount: 2, type: BuffType.bronze },
        { requiredCount: 4, type: BuffType.silver },
        { requiredCount: 6, type: BuffType.gold },
      ])
      expect(result).toBe(BuffType.gold)
    })
    it('returns none if no match', () => {
      const result = Buff.getBestType(1, [
        { requiredCount: 2, type: BuffType.bronze },
        { requiredCount: 4, type: BuffType.silver },
        { requiredCount: 6, type: BuffType.gold },
      ])
      expect(result).toBe(BuffType.none)
    })
    it('returns none match if empty array', () => {
      const result = Buff.getBestType(0, [])
      expect(result).toBe(BuffType.none)
    })
  })
  describe('downgrade', () => {
    it('downgrades from gold to silver', () => {
      expect(Buff.downgradeType(BuffType.gold)).toEqual(BuffType.silver)
    })
    it('downgrades from silver to bronze', () => {
      expect(Buff.downgradeType(BuffType.silver)).toEqual(BuffType.bronze)
    })
    it('downgrades from bronze to bronze', () => {
      expect(Buff.downgradeType(BuffType.bronze)).toEqual(BuffType.bronze)
    })
  })
})
