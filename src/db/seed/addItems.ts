import images from './images'
import { ItemCombinationType } from '../../models/item-combination'
import { ItemType, itemTypeToString, Item } from '../../models/item'
import generateGuid from './generateGuid'

const addItems = (items: Item[]) => {
  const addItem = (
    type: ItemType,
    image: string,
    combination: ItemCombinationType = ItemCombinationType.combined,
  ) => {
    items.push({
      id: generateGuid(),
      displayName: itemTypeToString(type),
      image,
      type,
      combinationType: combination,
    })
  }

  addItem(ItemType.bfSword, images.bfSword, ItemCombinationType.none)
  addItem(ItemType.chainVest, images.chainVest, ItemCombinationType.none)
  addItem(ItemType.giantsBelt, images.giantsBelt, ItemCombinationType.none)
  addItem(ItemType.largeRod, images.needlesslyLargeRod, ItemCombinationType.none)
  addItem(ItemType.negatronCloak, images.negatronCloak, ItemCombinationType.none)
  addItem(ItemType.recurveBow, images.recurveBow, ItemCombinationType.none)
  addItem(ItemType.spatula, images.spatula, ItemCombinationType.none)
  addItem(ItemType.sparringGloves, images.sparringGloves, ItemCombinationType.none)
  addItem(ItemType.tear, images.tear, ItemCombinationType.none)
  addItem(ItemType.gargoyle, images.gargoyleStoneplate)
  addItem(ItemType.sunfire, images.sunfireCape)
  addItem(ItemType.duelist, images.duelistsZeal)
  addItem(ItemType.elderwood, images.elderwoodHeirloom)
  addItem(ItemType.mage, images.magesCap)
  addItem(ItemType.dusk, images.mantleofDusk)
  addItem(ItemType.sword, images.swordoftheDivine)
  addItem(ItemType.vanguard, images.vanguardsCuirass)
  addItem(ItemType.warlord, images.warlordsBanner)
  addItem(ItemType.youmuu, images.youmuusGhostblade)
  addItem(ItemType.berserkersAxe, images.berserkerAxe)
  addItem(ItemType.botrk, images.botrk)
  addItem(ItemType.brambleVest, images.brambleVest)
  addItem(ItemType.deathblade, images.deathblade)
  addItem(ItemType.dragonsClaw, images.dragonsClaw)
  addItem(ItemType.bloodthirster, images.bloodThirster)
  addItem(ItemType.forceOfNature, images.forceOfNature)
  addItem(ItemType.frozenHeart, images.frozenHeart)
  addItem(ItemType.frozenMallet, images.frozenMallet)
  addItem(ItemType.giantslayer, images.giantSlayer)
  addItem(ItemType.guardianAngel, images.guardianAngel)
  addItem(ItemType.rageblade, images.rageblade)
  addItem(ItemType.handOfJustice, images.handOfJustice)
  addItem(ItemType.hextechGunblade, images.hextechGunblade)
  addItem(ItemType.hush, images.hush)
  addItem(ItemType.iceborneGauntlet, images.iceborneGauntlet)
  addItem(ItemType.infernoCinder, images.infernoCinder)
  addItem(ItemType.infinityEdge, images.infinityEdge)
  addItem(ItemType.ionicSpark, images.ionicSpark)
  addItem(ItemType.jeweledGauntlet, images.jeweledGauntlet)
  addItem(ItemType.lastWhisper, images.lastWhisper)
  addItem(ItemType.locket, images.locket)
  addItem(ItemType.ludensEcho, images.ludensEcho)
  addItem(ItemType.morellonomicon, images.morellonomicon)
  addItem(ItemType.quicksilver, images.quicksilver)
  addItem(ItemType.magesCap, images.rabadonsDeathcap)
  addItem(ItemType.rapidFirecannon, images.rapidFireCannon)
  addItem(ItemType.redemption, images.redemption)
  addItem(ItemType.runaansHurricane, images.runaansHurricane)
  addItem(ItemType.seraphsEmbrace, images.seraph)
  addItem(ItemType.spearOfShojin, images.shojin)
  addItem(ItemType.statikkShiv, images.statikkShiv)
  addItem(ItemType.talismanOfLight, images.talismanOfLight)
  addItem(ItemType.thiefsGloves, images.thiefsGloves)
  addItem(ItemType.titanicHydra, images.titanicHydra)
  addItem(ItemType.titansResolve, images.titansResolve)
  addItem(ItemType.trapClaw, images.trapClaw)
  addItem(ItemType.wardensMail, images.wardensMail)
  addItem(ItemType.warmog, images.warmog)
  addItem(ItemType.ghostblade, images.ghostblade)
  addItem(ItemType.zephyr, images.zephyr)
  addItem(ItemType.zekesHerald, images.zekesHerald)
}

export default addItems
