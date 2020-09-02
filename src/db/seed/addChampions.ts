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

  addChampion('Diana', ChampionTier.One, images.diana, [OriginType.moonlight], [RoleType.assassin])
  addChampion('Elise', ChampionTier.One, images.elise, [OriginType.cultist], [RoleType.keeper])
  addChampion('Fiora', ChampionTier.One, images.fiora, [OriginType.enlightened], [RoleType.duelist])
  addChampion('Garen', ChampionTier.One, images.garen, [OriginType.warlord], [RoleType.vanguard])
  addChampion('Lissandra', ChampionTier.One, images.lissandra, [OriginType.moonlight], [RoleType.dazzler])
  addChampion('Maokai', ChampionTier.One, images.maokai, [OriginType.elderwood], [RoleType.brawler])
  addChampion('Nami', ChampionTier.One, images.nami, [OriginType.enlightened], [RoleType.mage])
  addChampion('Nidalee', ChampionTier.One, images.nidalee, [OriginType.warlord], [RoleType.sharpshooter])
  addChampion('Pyke', ChampionTier.One, images.pyke, [OriginType.cultist], [RoleType.assassin])
  addChampion('Tahm Kench', ChampionTier.One, images.tahmKench, [OriginType.fortune], [RoleType.brawler])
  addChampion('Twisted Fate', ChampionTier.One, images.twistedFate, [OriginType.cultist], [RoleType.mage])
  addChampion('Vayne', ChampionTier.One, images.vayne, [OriginType.dusk], [RoleType.sharpshooter])
  addChampion('Wukong', ChampionTier.One, images.wukong, [OriginType.divine], [RoleType.vanguard])
  addChampion('Yasuo', ChampionTier.One, images.yasuo, [OriginType.exile], [RoleType.duelist])

  addChampion('Annie', ChampionTier.Two, images.annie, [OriginType.fortune], [RoleType.mage])
  addChampion('Aphelios', ChampionTier.Two, images.aphelios, [OriginType.moonlight], [RoleType.hunter])
  addChampion('Hecarim', ChampionTier.Two, images.hecarim, [OriginType.elderwood], [RoleType.vanguard])
  addChampion('Janna', ChampionTier.Two, images.janna, [OriginType.enlightened], [RoleType.mystic])
  addChampion('Jarvan IV', ChampionTier.Two, images.jarvanIV, [OriginType.warlord], [RoleType.keeper])
  addChampion('Jax', ChampionTier.Two, images.jax, [OriginType.divine], [RoleType.duelist])
  addChampion('Lulu', ChampionTier.Two, images.lulu, [OriginType.elderwood], [RoleType.mage])
  addChampion('Sylas', ChampionTier.Two, images.sylas, [OriginType.moonlight], [RoleType.brawler])
  addChampion('Teemo', ChampionTier.Two, images.teemo, [OriginType.spirit], [RoleType.sharpshooter])
  addChampion('Thresh', ChampionTier.Two, images.thresh, [OriginType.dusk], [RoleType.vanguard])
  addChampion('Vi', ChampionTier.Two, images.vi, [OriginType.warlord], [RoleType.brawler])
  addChampion('Zed', ChampionTier.Two, images.zed, [OriginType.ninja], [RoleType.shade])

  addChampion('Akali', ChampionTier.Three, images.akali, [OriginType.ninja], [RoleType.assassin])
  addChampion('Evelynn', ChampionTier.Three, images.evelynn, [OriginType.cultist], [RoleType.shade])
  addChampion('Irelia', ChampionTier.Three, images.irelia, [OriginType.enlightened, OriginType.divine], [RoleType.adept])
  addChampion('Jinx', ChampionTier.Three, images.jinx, [OriginType.fortune], [RoleType.sharpshooter])
  addChampion('Kalista', ChampionTier.Three, images.kalista, [OriginType.cultist], [RoleType.duelist])
  addChampion('Katarina', ChampionTier.Three, images.katarina, [OriginType.warlord, OriginType.fortune], [RoleType.assassin])
  addChampion('Kennen', ChampionTier.Three, images.kennen, [OriginType.ninja], [RoleType.keeper])
  addChampion('Kindred', ChampionTier.Three, images.kindred, [OriginType.spirit], [RoleType.hunter])
  addChampion('Lux', ChampionTier.Three, images.lux, [OriginType.divine], [RoleType.dazzler])
  addChampion('Nunu', ChampionTier.Three, images.nunu, [OriginType.elderwood], [RoleType.brawler])
  addChampion('Veigar', ChampionTier.Three, images.veigar, [OriginType.elderwood], [RoleType.mage])
  addChampion('Xin Zhao', ChampionTier.Three, images.xinZhao, [OriginType.warlord], [RoleType.duelist])
  addChampion('Yuumi', ChampionTier.Three, images.yuumi, [OriginType.spirit], [RoleType.mystic])

  addChampion('Aatrox', ChampionTier.Four, images.aatrox, [OriginType.cultist], [RoleType.vanguard])
  addChampion('Ahri', ChampionTier.Four, images.ahri, [OriginType.spirit], [RoleType.mage])
  addChampion('Ashe', ChampionTier.Four, images.ashe, [OriginType.elderwood], [RoleType.hunter])
  addChampion('Cassiopeia', ChampionTier.Four, images.cassiopeia, [OriginType.dusk], [RoleType.mystic, RoleType.dazzler])
  addChampion('Jhin', ChampionTier.Four, images.jhin, [OriginType.cultist], [RoleType.sharpshooter])
  addChampion('Morgana', ChampionTier.Four, images.morgana, [OriginType.enlightened], [RoleType.dazzler])
  addChampion('Riven', ChampionTier.Four, images.riven, [OriginType.dusk], [RoleType.keeper])
  addChampion('Sejuani', ChampionTier.Four, images.sejuani, [OriginType.fortune], [RoleType.vanguard])
  addChampion('Shen', ChampionTier.Four, images.shen, [OriginType.ninja], [RoleType.adept])
  addChampion('Talon', ChampionTier.Four, images.talon, [OriginType.enlightened], [RoleType.assassin])
  addChampion('Warwick', ChampionTier.Four, images.warwick, [OriginType.divine], [RoleType.brawler, RoleType.hunter])

  addChampion('Azir', ChampionTier.Five, images.azir, [OriginType.warlord], [RoleType.keeper, RoleType.emperor])
  addChampion('Ezreal', ChampionTier.Five, images.ezreal, [OriginType.elderwood], [RoleType.dazzler])
  addChampion('Kayn', ChampionTier.Five, images.kayn, [OriginType.tormented], [RoleType.shade])
  addChampion('Lee Sin', ChampionTier.Five, images.leeSin, [OriginType.divine], [RoleType.duelist])
  addChampion('Lillia', ChampionTier.Five, images.lillia, [OriginType.dusk], [RoleType.mage])
  addChampion('Sett', ChampionTier.Five, images.sett, [OriginType.theBoss], [RoleType.brawler])
  addChampion('Yone', ChampionTier.Five, images.yone, [OriginType.exile], [RoleType.adept])
  addChampion('Zilean', ChampionTier.Five, images.zilean, [OriginType.cultist], [RoleType.mystic])
}

export default addChampions