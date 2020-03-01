import { OriginType } from '../../models/origin'
import { RoleType } from '../../models/role'
import images from './images'
import { Champion, ChampionTier } from '../../models/champion'
import generateGuid from './generateGuid'

const addChampions = (champions: Champion[]) => {
  const addChampion = (
    name: string,
    tier: ChampionTier,
    image: string,
    origins: OriginType[],
    roles: RoleType[],
  ) => {
    champions.push({
      id: generateGuid(),
      displayName: name,
      tier,
      origins,
      roles,
      image,
    })
  }

  addChampion('Diana', ChampionTier.One, images.diana, [OriginType.inferno], [RoleType.assassin])
  addChampion('Ivern', ChampionTier.One, images.ivern, [OriginType.woodland], [RoleType.druid])
  addChampion('Kog\'Maw', ChampionTier.One, images.kogMaw, [OriginType.poison], [RoleType.predator])
  addChampion('Leona', ChampionTier.One, images.leona, [OriginType.lunar], [RoleType.warden])
  addChampion('Maokai', ChampionTier.One, images.maokai, [OriginType.woodland], [RoleType.druid])
  addChampion('Nasus', ChampionTier.One, images.nasus, [OriginType.light], [RoleType.warden])
  addChampion('Ornn', ChampionTier.One, images.ornn, [OriginType.electric], [RoleType.warden])
  addChampion('Renekton', ChampionTier.One, images.renekton, [OriginType.desert], [RoleType.berserker])
  addChampion('Taliyah', ChampionTier.One, images.taliyah, [OriginType.mountain], [RoleType.mage])
  addChampion('Vayne', ChampionTier.One, images.vayne, [OriginType.light], [RoleType.ranger])
  addChampion('Vladimir', ChampionTier.One, images.vladimir, [OriginType.ocean], [RoleType.mage])
  addChampion('Warwick', ChampionTier.One, images.warwick, [OriginType.glacial], [RoleType.predator])
  addChampion('Zyra', ChampionTier.One, images.zyra, [OriginType.inferno], [RoleType.summoner])

  addChampion('Braum', ChampionTier.Two, images.braum, [OriginType.glacial], [RoleType.warden])
  addChampion('Jax', ChampionTier.Two, images.jax, [OriginType.light], [RoleType.berserker])
  addChampion('LeBlanc', ChampionTier.Two, images.leBlanc, [OriginType.woodland], [RoleType.mage, RoleType.assassin])
  addChampion('Malzahar', ChampionTier.Two, images.malzahar, [OriginType.shadow], [RoleType.summoner])
  addChampion('Neeko', ChampionTier.Two, images.neeko, [OriginType.woodland], [RoleType.druid])
  addChampion('Varus', ChampionTier.Two, images.varus, [OriginType.inferno], [RoleType.ranger])
  addChampion('Skarner', ChampionTier.Two, images.skarner, [OriginType.crystal], [RoleType.predator])
  addChampion('Syndra', ChampionTier.Two, images.syndra, [OriginType.ocean], [RoleType.mage])
  addChampion('Thresh', ChampionTier.Two, images.thresh, [OriginType.ocean], [RoleType.warden])
  addChampion('Rek\'Sai', ChampionTier.Two, images.rekSai, [OriginType.steel], [RoleType.predator])
  addChampion('Senna', ChampionTier.Two, images.senna, [OriginType.shadow], [RoleType.soulbound])
  addChampion('Volibear', ChampionTier.Two, images.volibear, [OriginType.glacial, OriginType.electric], [RoleType.berserker])
  addChampion('Yasuo', ChampionTier.Two, images.yasuo, [OriginType.cloud], [RoleType.blademaster])

  addChampion('Aatrox', ChampionTier.Three, images.aatrox, [OriginType.light], [RoleType.blademaster])
  addChampion('Azir', ChampionTier.Three, images.azir, [OriginType.desert], [RoleType.summoner])
  addChampion('Dr. Mundo', ChampionTier.Three, images.drMundo, [OriginType.poison], [RoleType.berserker])
  addChampion('Ezreal', ChampionTier.Three, images.ezreal, [OriginType.glacial], [RoleType.ranger])
  addChampion('Karma', ChampionTier.Three, images.karma, [OriginType.lunar], [RoleType.mystic])
  addChampion('Kindred', ChampionTier.Three, images.kindred, [OriginType.inferno, OriginType.shadow], [RoleType.ranger])
  addChampion('Nautilus', ChampionTier.Three, images.nautilus, [OriginType.ocean], [RoleType.warden])
  addChampion('Nocturne', ChampionTier.Three, images.nocturne, [OriginType.steel], [RoleType.assassin])
  addChampion('Qiyana (Cloud)', ChampionTier.Three, images.qiyanaCloud, [OriginType.cloud], [RoleType.assassin])
  addChampion('Qiyana (Inferno)', ChampionTier.Three, images.qiyanaInferno, [OriginType.inferno], [RoleType.assassin])
  addChampion('Qiyana (Mountain)', ChampionTier.Three, images.qiyanaMountain, [OriginType.mountain], [RoleType.assassin])
  addChampion('Qiyana (Ocean)', ChampionTier.Three, images.qiyanaOcean, [OriginType.ocean], [RoleType.assassin])
  addChampion('Sion', ChampionTier.Three, images.sion, [OriginType.shadow], [RoleType.berserker])
  addChampion('Sivir', ChampionTier.Three, images.sivir, [OriginType.desert], [RoleType.blademaster])
  addChampion('Soraka', ChampionTier.Three, images.soraka, [OriginType.light], [RoleType.mystic])
  addChampion('Veigar', ChampionTier.Three, images.veigar, [OriginType.shadow], [RoleType.mage])

  addChampion('Annie', ChampionTier.Four, images.annie, [OriginType.inferno], [RoleType.summoner])
  addChampion('Ashe', ChampionTier.Four, images.ashe, [OriginType.crystal], [RoleType.ranger])
  addChampion('Brand', ChampionTier.Four, images.brand, [OriginType.inferno], [RoleType.mage])
  addChampion('Janna', ChampionTier.Four, images.janna, [OriginType.cloud], [RoleType.mystic])
  addChampion('Kha\'Zix', ChampionTier.Four, images.khazix, [OriginType.desert], [RoleType.assassin])
  addChampion('Malphite', ChampionTier.Four, images.malphite, [OriginType.mountain], [RoleType.warden])
  addChampion('Olaf', ChampionTier.Four, images.olaf, [OriginType.glacial], [RoleType.berserker])
  addChampion('Twitch', ChampionTier.Four, images.twitch, [OriginType.poison], [RoleType.ranger])
  addChampion('Yorick', ChampionTier.Four, images.yorick, [OriginType.light], [RoleType.summoner])
  addChampion('Lucian', ChampionTier.Four, images.lucian, [OriginType.light], [RoleType.soulbound])

  addChampion('Master Yi', ChampionTier.Five, images.masterYi, [OriginType.shadow], [RoleType.blademaster])
  addChampion('Nami', ChampionTier.Five, images.nami, [OriginType.ocean], [RoleType.mystic])
  addChampion('Singed', ChampionTier.Five, images.singed, [OriginType.poison], [RoleType.alchemist])
  addChampion('Taric', ChampionTier.Five, images.taric, [OriginType.crystal], [RoleType.warden])
  addChampion('Zed', ChampionTier.Five, images.zed, [OriginType.electric], [RoleType.assassin, RoleType.summoner])
  addChampion('Amumu', ChampionTier.Five, images.amumu, [OriginType.inferno], [RoleType.warden])
  addChampion('Lucian', ChampionTier.Five, images.lucian, [OriginType.light], [RoleType.soulbound])

  addChampion('Lux (Crystal)', ChampionTier.Seven, images.luxCrystal, [OriginType.crystal], [RoleType.avatar])
  addChampion('Lux (Electric)', ChampionTier.Seven, images.luxElectric, [OriginType.electric], [RoleType.avatar])
  addChampion('Lux (Glacial)', ChampionTier.Seven, images.luxGlacial, [OriginType.glacial], [RoleType.avatar])
  addChampion('Lux (Inferno)', ChampionTier.Seven, images.luxInferno, [OriginType.inferno], [RoleType.avatar])
  addChampion('Lux (Light)', ChampionTier.Seven, images.luxLight, [OriginType.light], [RoleType.avatar])
  addChampion('Lux (Ocean)', ChampionTier.Seven, images.luxOcean, [OriginType.ocean], [RoleType.avatar])
  addChampion('Lux (Shadow)', ChampionTier.Seven, images.luxShadow, [OriginType.shadow], [RoleType.avatar])
  addChampion('Lux (Steel)', ChampionTier.Seven, images.luxSteel, [OriginType.steel], [RoleType.avatar])
  addChampion('Lux (Woodland)', ChampionTier.Seven, images.luxWoodland, [OriginType.woodland], [RoleType.avatar])
}

export default addChampions