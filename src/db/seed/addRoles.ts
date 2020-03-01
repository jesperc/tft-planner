import images from './images'
import { RoleType, Role, roleTypeToString } from '../../models/role'
import Buff, { BuffType } from '../../models/buff'
import generateGuid from './generateGuid'

const addRoles = (roles: Role[]) => {
  const addRole = (type: RoleType, image: string, interval: number[]) => {
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
      displayName: roleTypeToString(type)
    })
  }

  addRole(RoleType.alchemist, images.alchemist, [1])
  addRole(RoleType.assassin, images.assassin, [3, 6])
  addRole(RoleType.avatar, images.avatar, [1])
  addRole(RoleType.berserker, images.berserker, [3, 6])
  addRole(RoleType.blademaster, images.blademaster, [2, 4, 6])
  addRole(RoleType.druid, images.druid, [2])
  addRole(RoleType.mage, images.mage, [3, 6])
  addRole(RoleType.mystic, images.mystic, [2, 4])
  addRole(RoleType.predator, images.predator, [3])
  addRole(RoleType.ranger, images.ranger, [2, 4, 6])
  addRole(RoleType.soulbound, images.soulbound, [2])
  addRole(RoleType.summoner, images.summoner, [3, 6])
  addRole(RoleType.warden, images.warden, [2, 4, 6])
}

export default addRoles
