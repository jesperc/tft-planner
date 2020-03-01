import { OriginType, originTypeToString } from './origin'

describe('origin', () => {
  describe('originTypeToString', () => {
    it('must not throw on valid type', () => {
      expect(() => {
        originTypeToString(OriginType.shadow)
      }).not.toThrow()
    })
    it('must throw on invalid type', () => {
      expect(() => {
        originTypeToString(OriginType.__length)
      }).toThrow()
    })
  })
})
