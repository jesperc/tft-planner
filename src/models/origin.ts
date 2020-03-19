import Buff from './buff'

export enum OriginType {
  celestial,
  chrono,
  cybernetic,
  darkStar,
  mechPilot,
  rebel,
  spacePirate,
  starGuardian,
  valkyrie,
  void,
  __length,
}

const originTypeToStringLut: Map<OriginType, string> = new Map([
  [OriginType.celestial, 'Celestial'],
  [OriginType.chrono, 'Chrono'],
  [OriginType.cybernetic, 'Cybernetic'],
  [OriginType.darkStar, 'Dark Star'],
  [OriginType.mechPilot, 'Mech Pilot'],
  [OriginType.rebel, 'Rebel'],
  [OriginType.spacePirate, 'Space Pirate'],
  [OriginType.starGuardian, 'Star Guardian'],
  [OriginType.valkyrie, 'Valkyrie'],
  [OriginType.void, 'Void'],
])

export const originTypeToString = (type: OriginType): string => {
  const result = originTypeToStringLut.get(type)
  if (!result) {
    throw new Error(`Couldn't find conversion from OriginType to string for ${type}`)
  }
  return result
}

export type Origin = {
  id: string
  image: string
  displayName: string
  type: OriginType
  buffs: Buff[]
  description: string
}
