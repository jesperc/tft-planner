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

  addChampion('Caitlyn', ChampionTier.One, images.caitlyn, [OriginType.chrono], [RoleType.sniper])
  addChampion('Fiora', ChampionTier.One, images.fiora, [OriginType.cybernetic], [RoleType.blademaster])
  addChampion('Graves', ChampionTier.One, images.graves, [OriginType.spacePirate], [RoleType.blaster])
  addChampion('Jarvan IV', ChampionTier.One, images.jarvanIV, [OriginType.darkStar], [RoleType.protector])
  addChampion('Kha\'zix', ChampionTier.One, images.khazix, [OriginType.void], [RoleType.infiltrator])
  addChampion('Leona', ChampionTier.One, images.leona, [OriginType.cybernetic], [RoleType.vanguard])
  addChampion('Malphite', ChampionTier.One, images.malphite, [OriginType.rebel], [RoleType.brawler])
  addChampion('Poppy', ChampionTier.One, images.poppy, [OriginType.starGuardian], [RoleType.vanguard])
  addChampion('Twisted Fate', ChampionTier.One, images.twistedFate, [OriginType.chrono], [RoleType.sorcerer])
  addChampion('Xayah', ChampionTier.One, images.xayah, [OriginType.celestial], [RoleType.blademaster])
  addChampion('Ziggs', ChampionTier.One, images.ziggs, [OriginType.rebel], [RoleType.demolitionist])
  addChampion('Zoe', ChampionTier.One, images.zoe, [OriginType.starGuardian], [RoleType.sorcerer])

  addChampion('Ahri', ChampionTier.Two, images.ahri, [OriginType.starGuardian], [RoleType.sorcerer])
  addChampion('Annie', ChampionTier.Two, images.annie, [OriginType.mechPilot], [RoleType.sorcerer])
  addChampion('Blitzcrank', ChampionTier.Two, images.blitzcrank, [OriginType.chrono], [RoleType.brawler])
  addChampion('Darius', ChampionTier.Two, images.darius, [OriginType.spacePirate], [RoleType.manaReaver])
  addChampion('Kaisa', ChampionTier.Two, images.kaisa, [OriginType.valkyrie], [RoleType.infiltrator])
  addChampion('Lucian', ChampionTier.Two, images.lucian, [OriginType.cybernetic], [RoleType.blaster])
  addChampion('Mordekaiser', ChampionTier.Two, images.mordekaiser, [OriginType.darkStar], [RoleType.vanguard])
  addChampion('Rakan', ChampionTier.Two, images.rakan, [OriginType.celestial], [RoleType.protector])
  addChampion('Shen', ChampionTier.Two, images.shen, [OriginType.chrono], [RoleType.blademaster])
  addChampion('Sona', ChampionTier.Two, images.sona, [OriginType.rebel], [RoleType.mystic])
  addChampion('Xin Zhao', ChampionTier.Two, images.xinZhao, [OriginType.celestial], [RoleType.protector])
  addChampion('Yasuo', ChampionTier.Two, images.yasuo, [OriginType.rebel], [RoleType.blademaster])

  addChampion('Ashe', ChampionTier.Three, images.ashe, [OriginType.celestial], [RoleType.sniper])
  addChampion('Ezreal', ChampionTier.Three, images.ezreal, [OriginType.chrono], [RoleType.blaster])
  addChampion('Jayce', ChampionTier.Three, images.jayce, [OriginType.spacePirate], [RoleType.vanguard])
  addChampion('Karma', ChampionTier.Three, images.karma, [OriginType.darkStar], [RoleType.mystic])
  addChampion('Kassadin', ChampionTier.Three, images.kassadin, [OriginType.celestial], [RoleType.manaReaver])
  addChampion('Lux', ChampionTier.Three, images.soraka, [OriginType.darkStar], [RoleType.sorcerer])
  addChampion('Master Yi', ChampionTier.Three, images.masterYi, [OriginType.rebel], [RoleType.blademaster])
  addChampion('Neeko', ChampionTier.Three, images.neeko, [OriginType.starGuardian], [RoleType.protector])
  addChampion('Rumble', ChampionTier.Three, images.rumble, [OriginType.mechPilot], [RoleType.demolitionist])
  addChampion('Shaco', ChampionTier.Three, images.shaco, [OriginType.darkStar], [RoleType.infiltrator])
  addChampion('Syndra', ChampionTier.Three, images.syndra, [OriginType.starGuardian], [RoleType.sorcerer])
  addChampion('Vi', ChampionTier.Three, images.vi, [OriginType.cybernetic], [RoleType.brawler])

  addChampion('Cho\'gath', ChampionTier.Four, images.chogath, [OriginType.void], [RoleType.brawler])
  addChampion('Fizz', ChampionTier.Four, images.fizz, [OriginType.mechPilot], [RoleType.infiltrator])
  addChampion('Irelia', ChampionTier.Four, images.irelia, [OriginType.cybernetic], [RoleType.blademaster, RoleType.manaReaver])
  addChampion('Jhin', ChampionTier.Four, images.jhin, [OriginType.darkStar], [RoleType.sniper])
  addChampion('Jinx', ChampionTier.Four, images.jinx, [OriginType.rebel], [RoleType.blaster])
  addChampion('Kayle', ChampionTier.Four, images.kayle, [OriginType.valkyrie], [RoleType.blademaster])
  addChampion('Soraka', ChampionTier.Four, images.soraka, [OriginType.starGuardian], [RoleType.mystic])
  addChampion('Velkoz', ChampionTier.Four, images.velkoz, [OriginType.void], [RoleType.sorcerer])
  addChampion('Wukong', ChampionTier.Four, images.wukong, [OriginType.chrono], [RoleType.vanguard])

  addChampion('Aurelion Sol', ChampionTier.Five, images.aurelionSol, [OriginType.rebel], [RoleType.starship])
  addChampion('Ekko', ChampionTier.Five, images.ekko, [OriginType.cybernetic], [RoleType.infiltrator])
  addChampion('Gangplank', ChampionTier.Five, images.gangplank, [OriginType.spacePirate], [RoleType.mercenary, RoleType.demolitionist])
  addChampion('Lulu', ChampionTier.Five, images.lulu, [OriginType.celestial], [RoleType.mystic])
  addChampion('Miss Fortune', ChampionTier.Five, images.missFortune, [OriginType.valkyrie], [RoleType.mercenary, RoleType.blaster])
  addChampion('Thresh', ChampionTier.Five, images.thresh, [OriginType.chrono], [RoleType.manaReaver])
}

export default addChampions