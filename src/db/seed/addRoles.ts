import images from './images'
import { RoleType, Role, roleTypeToString } from '../../models/role'
import Buff, { BuffType } from '../../models/buff'
import generateGuid from './generateGuid'

const addRoles = (roles: Role[]) => {
  const addRole = (type: RoleType, image: string, interval: number[], description: string) => {
    let buffType: BuffType = BuffType.gold;
    const buffs: Buff[] = []
    for (let i = interval.length - 1; i >= 0; --i) {
      buffs.push(new Buff({ requiredCount: interval[i], type: buffType }))
      buffType = Buff.downgradeType(buffType)
    }

    roles.push({
      id: generateGuid(),
      type,
      buffs,
      image,
      displayName: roleTypeToString(type),
      description
    })
  }

  addRole(RoleType.blademaster, images.blademaster, [3, 6], `Blademasters' Basic Attacks have a chance on hit to trigger two additional attacks against their target. 
  <br/><br/>These additional attacks deal damage like Basic Attacks and trigger on-hit effects.
  <br/><br/>
  3
  30% Chance to trigger
  <br/><br/>
  6
  55% Chance to trigger`)
  addRole(RoleType.blaster, images.blaster, [2, 4], `Every fourth Basic Attack from a Blast fires additional attacks at random enemies. 
  <br/><br/>These addiotional attacks deal damage like Basic Attacks and trigger on-hit effects.
  <br/><br/>
  2
  2 Additional Attacks
  <br/><br/>
  4
  5 Additional Attacks`)
  addRole(RoleType.brawler, images.brawler, [2, 4], `Brawlers gain bonus Maximum Health.
  <br/><br/>
  2
  300 Bonus Health
  <br/><br/>
  4
  750 Bonus Health`)
  addRole(RoleType.demolitionist, images.demolitionist, [2], `Damage from Demolitionists' spellcasts stun their targets for 1.50 seconds. (Once per spellcast)`)
  addRole(RoleType.infiltrator, images.infiltrator, [2, 4], `Innate: At the start of combat, Infiltrators move to the enemy's backline. Infiltrators gain Attack Speed for 6 seconds at the start of combat.
  <br/><br/>
  2
  50% Bonus Attack Speed
  <br/><br/>
  4
  80% Bonus Attack Speed. Refreshes on Takedown.`)
  addRole(RoleType.manaReaver, images.manaReaver, [2, 4], `Mana-Reaver's Basic Attacks increase the Mana cost of their target's next spellcast by 40%.
  <br/><br/>
  2
  First Attack each Combat
  <br/><br/>
  4
  All Attacks`)
  addRole(RoleType.mercenary, images.mercenary, [1], `Innate: Mercenaries can buy upgrades for their Spells in the shop.`)
  addRole(RoleType.mystic, images.mystic, [2, 4], `All allies gain Magic Resistance.
  <br/><br/>
  2
  30 Magic Resistance
  <br/><br/>
  4
  120 Magic Resistance`)
  addRole(RoleType.protector, images.protector, [2, 4], `Protectors shield themselves for 4 seconds whenever they cast a spell. This shield doesn't stack.
  <br/><br/>
  2
  20% Maximum Health Shield
  <br/><br/>
  4
  35% Maximum Health Shield`)
  addRole(RoleType.sniper, images.sniper, [2, 4], `Snipers deal 12% increased damage for each hex between themselves and their target.`)
  addRole(RoleType.sorcerer, images.sorcerer, [2, 4, 6], `All allies have increased Spell Power.
  <br/><br/>
  2
  20% Spell Power
  <br/><br/>
  4
  40% Spell Power
  <br/><br/>
  6
  80% Spell Power`)
  addRole(RoleType.starship, images.starship, [1], `Innate: Starships gain 20 mana per second, maneuver around the board, 
  <br/><br/>and are immune to movement impairing effects, but can't Basic Attack.`)
  addRole(RoleType.vanguard, images.vanguard, [2, 4, 6], `Vanguard champions gain bonus Armor.
  2
  60 Armor
  4
  250 Armor`)
  addRole(RoleType.paragon, images.paragon, [1], '')
}

export default addRoles
