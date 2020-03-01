import Buff from './buff'

export enum OriginType {
  cloud,
  crystal,
  desert,
  electric,
  glacial,
  inferno,
  light,
  mountain,
  ocean,
  poison,
  shadow,
  steel,
  woodland,
  lunar,
  __length,
}

const originTypeToStringLut: Map<OriginType, string> = new Map([
  [OriginType.cloud, 'Cloud'],
  [OriginType.crystal, 'Crystal'],
  [OriginType.desert, 'Desert'],
  [OriginType.electric, 'Electric'],
  [OriginType.glacial, 'Glacial'],
  [OriginType.inferno, 'Inferno'],
  [OriginType.light, 'Light'],
  [OriginType.mountain, 'Mountain'],
  [OriginType.ocean, 'Ocean'],
  [OriginType.poison, 'Poison'],
  [OriginType.shadow, 'Shadow'],
  [OriginType.steel, 'Steel'],
  [OriginType.woodland, 'Woodland'],
  [OriginType.lunar, 'Lunar'],
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
}
