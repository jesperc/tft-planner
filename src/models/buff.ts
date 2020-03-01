// Origin & role combinations gives different types of buffs
export enum BuffType {
  none,
  bronze,
  silver,
  gold,
  __length,
}

export default class Buff {
  requiredCount: number
  type: BuffType

  constructor({ requiredCount, type }: Buff) {
    this.requiredCount = requiredCount
    this.type = type
  }

  static getBestType(count: number, buffs: Buff[]): BuffType {
    const orderedBuffs = buffs.sort((a, b) => b.requiredCount - a.requiredCount)
    for (const buff of orderedBuffs) {
      if (count >= buff.requiredCount) {
        return buff.type
      }
    }
    return BuffType.none
  }

  static downgradeType(buffType: BuffType): BuffType {
    if (buffType === BuffType.gold) return BuffType.silver
    if (buffType === BuffType.silver) return BuffType.bronze
    return BuffType.bronze
  }
}
