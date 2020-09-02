import Buff from './buff'

export enum OriginType {
  cultist,
  divine,
  dusk,
  enlightened,
  elderwood,
  exile,
  fortune,
  moonlight,
  ninja,
  spirit,
  warlord,
  theBoss,
  tormented,
  __length,
}

const originTypeToStringLut: Map<OriginType, string> = new Map([
  [OriginType.cultist, 'Cultist'],
  [OriginType.divine, 'Divine'],
  [OriginType.dusk, 'Dusk'],
  [OriginType.enlightened, 'Enlightened'],
  [OriginType.elderwood, 'Elderwood'],
  [OriginType.exile, 'Exile'],
  [OriginType.fortune, 'Fortune'],
  [OriginType.moonlight, 'Moonlight'],
  [OriginType.ninja, 'Ninja'],
  [OriginType.spirit, 'Spirit'],
  [OriginType.warlord, 'Warlord'],
  [OriginType.theBoss, 'The Boss'],
  [OriginType.tormented, 'Tormented'],
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
