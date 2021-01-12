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

  addOrigin(OriginType.cultist, images.cultist, [3, 6, 9], "")
  addOrigin(OriginType.divine, images.divine, [2, 4, 6, 8], "")
  addOrigin(OriginType.fabled, images.fabled, [3], "")
  addOrigin(OriginType.enlightened, images.enlightened, [2, 4, 6], "")
  addOrigin(OriginType.elderwood, images.elderwood, [3, 6, 9], "")
  addOrigin(OriginType.exile, images.exile, [1, 2], "")
  addOrigin(OriginType.fortune, images.fortune, [3, 6], "")
  addOrigin(OriginType.dragonsoul, images.dragonsoul, [3, 6, 9], "")
  addOrigin(OriginType.ninja, images.ninja, [1, 4], "")
  addOrigin(OriginType.spirit, images.spirit, [2, 4], "")
  addOrigin(OriginType.warlord, images.warlord, [3, 6, 9], "")
  addOrigin(OriginType.theBoss, images.theboss, [1], "")
  addOrigin(OriginType.daredevil, images.daredevil, [1], "")
}

export default addOrigins
