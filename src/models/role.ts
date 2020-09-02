import Buff from './buff'

export enum RoleType {
  adept,
  assassin,
  brawler,
  dazzler,
  duelist,
  hunter,
  keeper,
  mage,
  mystic,
  shade,
  sharpshooter,
  vanguard,
  emperor,
  __length,
}

const roleTypeToStringLut: Map<RoleType, string> = new Map([
  [RoleType.adept, 'Adept'],
  [RoleType.assassin, 'Assassin'],
  [RoleType.brawler, 'Brawler'],
  [RoleType.dazzler, 'Dazzler'],
  [RoleType.duelist, 'Duelist'],
  [RoleType.hunter, 'Hunter'],
  [RoleType.keeper, 'Keeper'],
  [RoleType.mage, 'Mage'],
  [RoleType.mystic, 'Mystic'],
  [RoleType.shade, 'Shade'],
  [RoleType.sharpshooter, 'Sharpshooter'],
  [RoleType.vanguard, 'Vanguard'],
  [RoleType.emperor, 'Emperor'],
])

export const roleTypeToString = (roleType: RoleType): string => {
  const result = roleTypeToStringLut.get(roleType)
  if (!result) {
    throw new Error(`Couldn't find string conversion for role type ${roleType}`)
  }
  return result
}

export type Role = {
  id: string
  image: string
  displayName: string
  type: RoleType
  buffs: Buff[]
  description: string
}
