import Buff from './buff'

export enum OriginType {
  cultist,
  divine,
  fabled,
  enlightened,
  elderwood,
  exile,
  fortune,
  daredevil,
  ninja,
  spirit,
  warlord,
  theBoss,
  dragonsoul,
  __length,
}

const originTypeToStringLut: Map<OriginType, string> = new Map([
  [OriginType.cultist, 'Cultist'],
  [OriginType.divine, 'Divine'],
  [OriginType.dragonsoul, 'Dragonsoul'],
  [OriginType.enlightened, 'Enlightened'],
  [OriginType.elderwood, 'Elderwood'],
  [OriginType.exile, 'Exile'],
  [OriginType.fortune, 'Fortune'],
  [OriginType.daredevil, 'Daredevil'],
  [OriginType.ninja, 'Ninja'],
  [OriginType.spirit, 'Spirit'],
  [OriginType.warlord, 'Warlord'],
  [OriginType.theBoss, 'The Boss'],
  [OriginType.fabled, 'Fabled'],
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
