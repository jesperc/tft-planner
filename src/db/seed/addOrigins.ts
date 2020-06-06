import { OriginType, Origin, originTypeToString } from '../../models/origin'
import images from './images'
import Buff, { BuffType } from '../../models/buff'
import generateGuid from './generateGuid'

const addOrigins = (origins: Origin[]) => {
  const addOrigin = (type: OriginType, image: string, interval: number[], description: string) => {
    let buffType: BuffType = BuffType.gold;
    const buffs: Buff[] = []
    for (let i = interval.length - 1; i >= 0; --i) {
      buffs.push(new Buff({ requiredCount: interval[i], type: buffType }))
      buffType = Buff.downgradeType(buffType)
    }

    origins.push({
      id: generateGuid(),
      type,
      buffs,
      image,
      displayName: originTypeToString(type),
      description
    })
  }

  addOrigin(OriginType.celestial, images.celestial, [2, 4, 6], `All allies heal for a percent of the damage they deal with spells and attacks.
  <br/><br/>
  2
  15% Healing
  <br/><br/>
  4
  30% Healing
  <br/><br/>
  
  6
  60% Healing`)
  addOrigin(OriginType.chrono, images.chrono, [2, 4, 6], `All allies gain Attack Speed every 4 seconds.
  <br/><br/>
  2
  10% Attack Speed
  <br/><br/>
  4
  35% Attack Speed
  <br/><br/>
  6
  70% Attack Speed`)
  addOrigin(OriginType.cybernetic, images.cybernetic, [3, 6], `Cybernetic champions with at least one item gain Health and Attack Damage.
  <br/><br/>
  3
  350 Health & 35 Attack Damage
  <br/><br/>
  6
  800 Health & 80 Attack Damage`)
  addOrigin(OriginType.darkStar, images.darkstar, [3, 6], `When a Dark Star Champion dies, it gives increased damage, plus any previous stacks of this effect, to the nearest ally Dark Star Champion.
  <br/><br/>
  3
  35% Damage Increase
  <br/><br/>
  6
  80% Damage Increase`)
  addOrigin(OriginType.mechPilot, images.mechpilot, [3], `At the start of combat, three random Mech-Pilots are teleported into a Super-Mech. The Super-Mech has the combined Health, Attack Damage, and Traits of its Pilots, <br/><br/>as well as 3 random items from among them. When the Super-Mech dies, the pilots are ejected, granted 25 Mana, and continue to fight.`)
  addOrigin(OriginType.rebel, images.rebel, [3, 6], `At the start of combat, Rebels gain a shield and increased damage for each adjacent Rebel.
  <br/><br/>
  3
  150 Shield & 10% Damage
  <br/><br/>
  6
  225 Shield & 12% Damage`)
  addOrigin(OriginType.spacePirate, images.spacepirate, [2, 4], `Whenever a Space Pirate lands a killing blow on a Champion there is a chance to drop extra loot.
  <br/><br/>
  2
  50% for 1 Gold
  <br/><br/>
  4
  50% for 1 Gold and 15% for a component item`)
  addOrigin(OriginType.starGuardian, images.starguardian, [3, 6], `Star Guardian's spellcasts grant Mana to other Star Guardians. (Spreads among them)
  <br/><br/>
  3
  30 Total Mana
  <br/><br/>
  6
  60 Total Mana`)
  addOrigin(OriginType.astro, images.astro, [3], `Astro champions have their mana cost reduced by 30.`)
  addOrigin(OriginType.battlecast, images.battlecast, [2, 4, 6, 8], `Upon taking or dealing damage 10 times, Battlecast champions heal if below 50% hp or deal damage if above`)
}

export default addOrigins
