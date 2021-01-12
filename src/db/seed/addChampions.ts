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

  addChampion('Diana', ChampionTier.One, images.diana, [OriginType.spirit], [RoleType.assassin])
  addChampion('Elise', ChampionTier.One, images.elise, [OriginType.cultist], [RoleType.keeper])
  addChampion('Fiora', ChampionTier.One, images.fiora, [OriginType.enlightened], [RoleType.duelist])
  addChampion('Garen', ChampionTier.One, images.garen, [OriginType.warlord], [RoleType.vanguard])
  addChampion('Tristana', ChampionTier.One, images.tristana, [OriginType.dragonsoul], [RoleType.sharpshooter])
  addChampion('Maokai', ChampionTier.One, images.maokai, [OriginType.elderwood], [RoleType.brawler])
  addChampion('Nasus', ChampionTier.One, images.nami, [OriginType.divine], [RoleType.syphoner])
  addChampion('Nidalee', ChampionTier.One, images.nidalee, [OriginType.warlord], [RoleType.sharpshooter])
  addChampion('Pyke', ChampionTier.One, images.pyke, [OriginType.cultist], [RoleType.assassin, RoleType.slayer])
  addChampion('Tahm Kench', ChampionTier.One, images.tahmKench, [OriginType.fortune], [RoleType.brawler])
  addChampion('Twisted Fate', ChampionTier.One, images.twistedFate, [OriginType.cultist], [RoleType.mage])
  addChampion('Brand', ChampionTier.One, images.brand, [OriginType.dragonsoul], [RoleType.mage])
  addChampion('Wukong', ChampionTier.One, images.wukong, [OriginType.divine], [RoleType.vanguard])
  addChampion('Yasuo', ChampionTier.One, images.yasuo, [OriginType.exile], [RoleType.duelist])

  addChampion('Annie', ChampionTier.Two, images.annie, [OriginType.fortune], [RoleType.mage])
  addChampion('Braum', ChampionTier.Two, images.braum, [OriginType.dragonsoul], [RoleType.vanguard])
  addChampion('Nautilus', ChampionTier.Two, images.nautilus, [OriginType.fabled], [RoleType.vanguard])
  addChampion('Janna', ChampionTier.Two, images.janna, [OriginType.enlightened], [RoleType.mystic])
  addChampion('Jarvan IV', ChampionTier.Two, images.jarvanIV, [OriginType.warlord], [RoleType.keeper])
  addChampion('Jax', ChampionTier.Two, images.jax, [OriginType.divine], [RoleType.duelist])
  addChampion('Lulu', ChampionTier.Two, images.lulu, [OriginType.elderwood], [RoleType.mage])
  addChampion('Rakan', ChampionTier.Two, images.rakan, [OriginType.elderwood], [RoleType.keeper])
  addChampion('Teemo', ChampionTier.Two, images.teemo, [OriginType.spirit], [RoleType.sharpshooter])
  addChampion('Vladimir', ChampionTier.Two, images.vladimir, [OriginType.cultist], [RoleType.syphoner])
  addChampion('Vi', ChampionTier.Two, images.vi, [OriginType.warlord], [RoleType.brawler])
  addChampion('Zed', ChampionTier.Two, images.zed, [OriginType.ninja], [RoleType.slayer])

  addChampion('Akali', ChampionTier.Three, images.akali, [OriginType.ninja], [RoleType.assassin])
  addChampion('Irelia', ChampionTier.Three, images.irelia, [OriginType.enlightened, OriginType.divine], [RoleType.adept])
  addChampion('Jinx', ChampionTier.Three, images.jinx, [OriginType.fortune], [RoleType.sharpshooter])
  addChampion('Kalista', ChampionTier.Three, images.kalista, [OriginType.cultist], [RoleType.duelist])
  addChampion('Katarina', ChampionTier.Three, images.katarina, [OriginType.warlord, OriginType.fortune], [RoleType.assassin])
  addChampion('Kennen', ChampionTier.Three, images.kennen, [OriginType.ninja], [RoleType.keeper])
  addChampion('Kindred', ChampionTier.Three, images.kindred, [OriginType.spirit], [RoleType.executioner])
  addChampion('Darius', ChampionTier.Three, images.darius, [OriginType.fortune], [RoleType.slayer])
  addChampion('Nunu', ChampionTier.Three, images.nunu, [OriginType.elderwood], [RoleType.brawler])
  addChampion('Veigar', ChampionTier.Three, images.veigar, [OriginType.elderwood], [RoleType.mage])
  addChampion('Shyvana', ChampionTier.Three, images.shyvana, [OriginType.dragonsoul], [RoleType.brawler])
  addChampion('Yuumi', ChampionTier.Three, images.yuumi, [OriginType.spirit], [RoleType.mystic])
  addChampion('Neeko', ChampionTier.Three, images.neeko, [OriginType.fabled], [RoleType.mystic])

  addChampion('Aatrox', ChampionTier.Four, images.aatrox, [OriginType.cultist], [RoleType.vanguard])
  addChampion('Aurelion Sol', ChampionTier.Four, images.aurelionSol, [OriginType.dragonsoul], [RoleType.mage])
  addChampion('Cho\'gath', ChampionTier.Four, images.chogath, [OriginType.fabled], [RoleType.brawler])
  addChampion('Morgana', ChampionTier.Four, images.morgana, [OriginType.enlightened], [RoleType.syphoner])
  addChampion('Kayle', ChampionTier.Four, images.kayle, [OriginType.divine], [RoleType.executioner])
  addChampion('Sejuani', ChampionTier.Four, images.sejuani, [OriginType.fortune], [RoleType.vanguard])
  addChampion('Shen', ChampionTier.Four, images.shen, [OriginType.ninja], [RoleType.adept])
  addChampion('Talon', ChampionTier.Four, images.talon, [OriginType.enlightened], [RoleType.assassin])
  addChampion('Olaf', ChampionTier.Four, images.olaf, [OriginType.dragonsoul], [RoleType.slayer])
  addChampion('Xayah', ChampionTier.Four, images.xayah, [OriginType.elderwood], [RoleType.keeper, RoleType.executioner])
  addChampion('Tryndamere', ChampionTier.Four, images.tryndamere, [OriginType.warlord], [RoleType.slayer, RoleType.duelist])

  addChampion('Azir', ChampionTier.Five, images.azir, [OriginType.warlord], [RoleType.keeper, RoleType.emperor])
  addChampion('Swain', ChampionTier.Five, images.swain, [OriginType.dragonsoul], [RoleType.syphoner])
  addChampion('Samira', ChampionTier.Five, images.samira, [OriginType.daredevil], [RoleType.sharpshooter, RoleType.slayer])
  addChampion('Lee Sin', ChampionTier.Five, images.leeSin, [OriginType.divine], [RoleType.duelist])
  addChampion('Orn', ChampionTier.Five, images.ornn, [OriginType.elderwood], [RoleType.blacksmith, RoleType.vanguard])
  addChampion('Sett', ChampionTier.Five, images.sett, [OriginType.theBoss], [RoleType.brawler])
  addChampion('Yone', ChampionTier.Five, images.yone, [OriginType.exile], [RoleType.adept])
  addChampion('Zilean', ChampionTier.Five, images.zilean, [OriginType.cultist], [RoleType.mystic])
}

export default addChampions