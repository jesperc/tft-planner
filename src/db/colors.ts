import { BuffType } from '../models/buff'
import { ChampionTier } from '../models/champion'

export const getChampionTierColor = (tier: ChampionTier): string => {
  const color = championTierColors.get(tier)
  if (!color) {
    throw new Error(`Couldn't find champion tier color for '${ChampionTier[tier]}'`)
  }
  return color
}

export const getBuffBorderColor = (buff: BuffType) => {
  const color = buffBorderColors.get(buff)
  if (!color) {
    throw new Error(`Couldn't find buff color for '${BuffType[buff]}'`)
  }
  return color
}

export const getBuffFilterColor = (buff: BuffType) => {
  const color = buffFilterColors.get(buff)
  if (!color) {
    throw new Error(`Couldn't find buff filter color for '${BuffType[buff]}'`)
  }
  return color
}

const championTierColors: Map<ChampionTier, string> = new Map<ChampionTier, string>([
  [ChampionTier.One, '#213042'],
  [ChampionTier.Two, '#156831'],
  [ChampionTier.Three, '#12407C'],
  [ChampionTier.Four, '#893088'],
  [ChampionTier.Five, '#B89D27'],
])

const buffBorderColors: Map<BuffType, string> = new Map([
  [BuffType.none, '#808080'],
  [BuffType.bronze, '#FFD700'],
  [BuffType.silver, '#808080'],
  [BuffType.gold, '#CD7F32'],
])

const buffFilterColors: Map<BuffType, string> = new Map([
  [BuffType.none, ' '],
  [
    BuffType.bronze,
    'invert(54%) sepia(95%) saturate(376%) hue-rotate(349deg) brightness(86%) contrast(85%)',
  ],
  [
    BuffType.silver,
    'invert(50%) sepia(0%) saturate(0%) hue-rotate(135deg) brightness(160%) contrast(88%)',
  ],
  [
    BuffType.gold,
    'invert(69%) sepia(87%) saturate(666%) hue-rotate(2deg) brightness(186%) contrast(106%)',
  ],
])
