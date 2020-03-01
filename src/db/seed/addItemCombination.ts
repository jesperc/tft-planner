import { ItemType, Item } from '../../models/item'
import { ItemCombination } from '../../models/item-combination'
import generateGuid from './generateGuid'

const addItemCombinations = (itemCombinations: ItemCombination[], items: Item[]) => {
  const addItemCombination = (
    itemType1: ItemType,
    itemType2: ItemType,
    combinedItemType: ItemType,
  ) => {
    const a = items.find(item => item.type === itemType1)!
    const b = items.find(item => item.type === itemType2)!
    const result = items.find(item => item.type === combinedItemType)!
    itemCombinations.push({
      id: generateGuid(),
      a,
      b,
      result,
    })
    itemCombinations.push({
      id: generateGuid(),
      a: b,
      b: a,
      result,
    })
  }

  addItemCombination(ItemType.chainVest, ItemType.chainVest, ItemType.brambleVest)
  addItemCombination(ItemType.chainVest, ItemType.tear, ItemType.frozenHeart)
  addItemCombination(ItemType.chainVest, ItemType.spatula, ItemType.wardensMail)
  addItemCombination(ItemType.chainVest, ItemType.negatronCloak, ItemType.swordbreaker)
  addItemCombination(ItemType.chainVest, ItemType.giantsBelt, ItemType.redBuff)
  addItemCombination(ItemType.chainVest, ItemType.bfSword, ItemType.guardianAngel)
  addItemCombination(ItemType.chainVest, ItemType.recurveBow, ItemType.titansResolve)
  addItemCombination(ItemType.chainVest, ItemType.sparringGloves, ItemType.iceborneGauntlet)
  addItemCombination(ItemType.chainVest, ItemType.largeRod, ItemType.locket)

  addItemCombination(ItemType.tear, ItemType.tear, ItemType.seraphsEmbrace)
  addItemCombination(ItemType.tear, ItemType.spatula, ItemType.magesCap)
  addItemCombination(ItemType.tear, ItemType.negatronCloak, ItemType.hush)
  addItemCombination(ItemType.tear, ItemType.giantsBelt, ItemType.redemption)
  addItemCombination(ItemType.tear, ItemType.bfSword, ItemType.spearOfShojin)
  addItemCombination(ItemType.tear, ItemType.recurveBow, ItemType.statikkShiv)
  addItemCombination(ItemType.tear, ItemType.sparringGloves, ItemType.handOfJustice)
  addItemCombination(ItemType.tear, ItemType.largeRod, ItemType.ludensEcho)

  addItemCombination(ItemType.spatula, ItemType.spatula, ItemType.forceOfNature)
  addItemCombination(ItemType.spatula, ItemType.negatronCloak, ItemType.talismanOfLight)
  addItemCombination(ItemType.spatula, ItemType.giantsBelt, ItemType.frozenMallet)
  addItemCombination(ItemType.spatula, ItemType.bfSword, ItemType.ghostblade)
  addItemCombination(ItemType.spatula, ItemType.recurveBow, ItemType.botrk)
  addItemCombination(ItemType.spatula, ItemType.sparringGloves, ItemType.berserkersAxe)
  addItemCombination(ItemType.spatula, ItemType.largeRod, ItemType.infernoCinder)

  addItemCombination(ItemType.negatronCloak, ItemType.negatronCloak, ItemType.dragonsClaw)
  addItemCombination(ItemType.negatronCloak, ItemType.giantsBelt, ItemType.zephyr)
  addItemCombination(ItemType.negatronCloak, ItemType.bfSword, ItemType.bloodthirster)
  addItemCombination(ItemType.negatronCloak, ItemType.recurveBow, ItemType.runaansHurricane)
  addItemCombination(ItemType.negatronCloak, ItemType.sparringGloves, ItemType.quicksilver)
  addItemCombination(ItemType.negatronCloak, ItemType.largeRod, ItemType.ionicSpark)

  addItemCombination(ItemType.giantsBelt, ItemType.giantsBelt, ItemType.warmog)
  addItemCombination(ItemType.giantsBelt, ItemType.bfSword, ItemType.zekesHerald)
  addItemCombination(ItemType.giantsBelt, ItemType.recurveBow, ItemType.titanicHydra)
  addItemCombination(ItemType.giantsBelt, ItemType.sparringGloves, ItemType.trapClaw)
  addItemCombination(ItemType.giantsBelt, ItemType.largeRod, ItemType.morellonomicon)

  addItemCombination(ItemType.bfSword, ItemType.bfSword, ItemType.deathblade)
  addItemCombination(ItemType.bfSword, ItemType.recurveBow, ItemType.giantslayer)
  addItemCombination(ItemType.bfSword, ItemType.sparringGloves, ItemType.infinityEdge)
  addItemCombination(ItemType.bfSword, ItemType.largeRod, ItemType.hextechGunblade)

  addItemCombination(ItemType.recurveBow, ItemType.recurveBow, ItemType.rapidFirecannon)
  addItemCombination(ItemType.recurveBow, ItemType.sparringGloves, ItemType.lastWhisper)
  addItemCombination(ItemType.recurveBow, ItemType.largeRod, ItemType.rageblade)

  addItemCombination(ItemType.sparringGloves, ItemType.sparringGloves, ItemType.thiefsGloves)
  addItemCombination(ItemType.sparringGloves, ItemType.largeRod, ItemType.jeweledGauntlet)

  addItemCombination(ItemType.largeRod, ItemType.largeRod, ItemType.magesCap)
}

export default addItemCombinations
