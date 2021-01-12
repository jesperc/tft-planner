import Buff from './buff'

export enum RoleType {
  adept,
  assassin,
  brawler,
  slayer,
  duelist,
  executioner,
  keeper,
  mage,
  mystic,
  blacksmith,
  sharpshooter,
  vanguard,
  emperor,
  syphoner,
  __length,
}

const roleTypeToStringLut: Map<RoleType, string> = new Map([
  [RoleType.adept, 'Adept'],
  [RoleType.assassin, 'Assassin'],
  [RoleType.brawler, 'Brawler'],
  [RoleType.slayer, 'Slayer'],
  [RoleType.duelist, 'Duelist'],
  [RoleType.executioner, 'Executioner'],
  [RoleType.keeper, 'Keeper'],
  [RoleType.mage, 'Mage'],
  [RoleType.mystic, 'Mystic'],
  [RoleType.blacksmith, 'Blacksmith'],
  [RoleType.sharpshooter, 'Sharpshooter'],
  [RoleType.vanguard, 'Vanguard'],
  [RoleType.emperor, 'Emperor'],
  [RoleType.syphoner, 'Syphoner'],
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
