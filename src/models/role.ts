import Buff from './buff'

export enum RoleType {
  blademaster,
  blaster,
  brawler,
  demolitionist,
  infiltrator,
  manaReaver,
  mercenary,
  mystic,
  protector,
  sniper,
  sorcerer,
  starship,
  vanguard,
  paragon,
  __length,
}

const roleTypeToStringLut: Map<RoleType, string> = new Map([
  [RoleType.blademaster, 'Blademaster'],
  [RoleType.blaster, 'Blaster'],
  [RoleType.brawler, 'Brawler'],
  [RoleType.demolitionist, 'Demolitionist'],
  [RoleType.infiltrator, 'Infiltrator'],
  [RoleType.manaReaver, 'Mana-Reaver'],
  [RoleType.mercenary, 'Mercenary'],
  [RoleType.mystic, 'Mystic'],
  [RoleType.protector, 'Protector'],
  [RoleType.sniper, 'Sniper'],
  [RoleType.sorcerer, 'Sorcerer'],
  [RoleType.starship, 'Starship'],
  [RoleType.vanguard, 'Vanguard'],
  [RoleType.paragon, 'Paragon'],
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
