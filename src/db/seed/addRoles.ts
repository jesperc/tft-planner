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

  addRole(RoleType.adept, images.adept, [2, 3, 4], "")
  addRole(RoleType.assassin, images.assassin, [2, 4, 6], "")
  addRole(RoleType.brawler, images.brawler, [2, 4, 6], "")
  addRole(RoleType.slayer, images.slayer, [3, 6], "")
  addRole(RoleType.duelist, images.duelist, [2, 4, 6, 8], "")
  addRole(RoleType.executioner, images.executioner, [2, 3, 4], "")
  addRole(RoleType.keeper, images.keeper, [2, 4, 6], "")
  addRole(RoleType.mage, images.mage, [3, 6, 9], "")
  addRole(RoleType.mystic, images.mystic, [2, 4], "")
  addRole(RoleType.blacksmith, images.blacksmith, [1], "")
  addRole(RoleType.sharpshooter, images.sharpshooter, [2, 4, 6], "")
  addRole(RoleType.vanguard, images.vanguard, [2, 4, 6], "")
  addRole(RoleType.emperor, images.emperor, [1], "")
  addRole(RoleType.syphoner, images.syphoner, [2, 4], "")
}

export default addRoles
