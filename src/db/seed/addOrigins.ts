import { OriginType, Origin, originTypeToString } from '../../models/origin'
import images from './images'
import Buff, { BuffType } from '../../models/buff'
import generateGuid from './generateGuid'

const addOrigins = (origins: Origin[]) => {
  const addOrigin = (type: OriginType, image: string, interval: number[]) => {
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
      displayName: originTypeToString(type)
    })
  }

  addOrigin(OriginType.cloud, images.cloud, [2, 3, 4])
  addOrigin(OriginType.crystal, images.crystal, [2, 4])
  addOrigin(OriginType.desert, images.desert, [2, 4])
  addOrigin(OriginType.electric, images.electric, [2, 3, 4])
  addOrigin(OriginType.glacial, images.glacial, [2, 4, 6])
  addOrigin(OriginType.inferno, images.inferno, [3, 6, 9])
  addOrigin(OriginType.light, images.light, [3, 6, 9])
  addOrigin(OriginType.lunar, images.lunar, [2])
  addOrigin(OriginType.mountain, images.mountain, [2])
  addOrigin(OriginType.ocean, images.ocean, [2, 4, 6])
  addOrigin(OriginType.poison, images.poison, [3])
  addOrigin(OriginType.shadow, images.shadow, [3, 6])
  addOrigin(OriginType.steel, images.steel, [2, 3, 4])
  addOrigin(OriginType.woodland, images.woodland, [2])
}

export default addOrigins
