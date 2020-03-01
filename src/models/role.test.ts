import { RoleType, roleTypeToString } from './role'

describe('role', () => {
  describe('roleTypeToString', () => {
    it('must not throw on valid type', () => {
      expect(() => {
        roleTypeToString(RoleType.alchemist)
      }).not.toThrow()
    })
    it('must throw on invalid type', () => {
      expect(() => {
        roleTypeToString(RoleType.__length)
      }).toThrow()
    })
  })
})
