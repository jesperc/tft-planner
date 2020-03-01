import Buff from './buff'

export enum RoleType {
  alchemist,
  assassin,
  avatar,
  berserker,
  blademaster,
  druid,
  mage,
  mystic,
  predator,
  ranger,
  soulbound,
  summoner,
  warden,
  __length,
}

const roleTypeToStringLut: Map<RoleType, string> = new Map([
  [RoleType.alchemist, 'Alchemist'],
  [RoleType.assassin, 'Assassin'],
  [RoleType.avatar, 'Avatar'],
  [RoleType.berserker, 'Berserker'],
  [RoleType.blademaster, 'Blademaster'],
  [RoleType.druid, 'Druid'],
  [RoleType.mage, 'Mage'],
  [RoleType.mystic, 'Mystic'],
  [RoleType.predator, 'Predator'],
  [RoleType.ranger, 'Ranger'],
  [RoleType.soulbound, 'Soulbound'],
  [RoleType.summoner, 'Summoner'],
  [RoleType.warden, 'Warden'],
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
}
