import Origin from '../models/origin';
import Role from '../models/role';
import Champion from '../models/champion';
import Item from '../models/item';
import * as images from './images';

const CLOUD = 0;
const CRYSTAL = 1;
const DESERT = 2;
const ELECTRIC = 3;
const GLACIAL = 4;
const INFERNO = 5;
const LIGHT = 6;
const MOUNTAIN = 7;
const OCEAN = 8;
const POISON = 9;
const SHADOW = 10;
const STEEL = 11;
const WOODLAND = 12;

const ALCHEMIST = 0;
const ASSASSIN = 1;
const AVATAR = 2;
const BERSERKER = 3;
const BLADEMASTER = 4;
const DRUID = 5;
const MAGE = 6;
const MYSTIC = 7;
const PREDATOR = 8;
const RANGER = 9;
const SOULBOUND = 10;
const SUMMONER = 11;
const WARDEN = 12;
const ROLE_COUNT = 13;

// const BF_SWORD = 0;
// const CHAIN_VEST = 1;    
// const GIANTS_BELT = 2;   
// const LARGE_ROD = 3;     
// const NEGATRON_CLOAK = 4;
// const RECURVE_BOW = 5;   
// const SPATULA = 6;      
// const TEAR = 7;         

const row = [...Array(ROLE_COUNT).keys()];

let origins = [];
let roles = [];
let items = [];
let champions = [];
let championId = 0;

const createOrigin = (image, id, name, color, interval) => {
    origins.push(new Origin({ image, id, name, color, interval }));
};

const createRole = (image, id, name, interval) => {
    roles.push(new Role({ image, id, name, interval }));
};

// const createItem = (image, id, name) => {
//     items.push(new Item({image, id, name}));
// };

const createChampion = (image, tier, name, origin, role) => {
    let origins = origin;
    if (origin.constructor !== Array) {
        origins = [origin];
    }
    let roles = role;
    if (role.constructor !== Array) {
        roles = [role];
    }

    champions.push(new Champion({ image, tier, id: championId++, name, origins, roles }));
};

const createOrigins = () => {
    origins = [];
    createOrigin(images.cloud, CLOUD, 'Cloud', 'rgb(255, 0, 0)', [2, 3, 4]);
    createOrigin(images.crystal, CRYSTAL, 'Crystal', 'rgb(255, 0, 0)', [2, 4]);
    createOrigin(images.desert, DESERT, 'Desert', 'rgb(255, 0, 0)', [2, 4]);
    createOrigin(images.electric, ELECTRIC, 'Electric', 'rgb(255, 0, 0)', [2, 3, 4]);
    createOrigin(images.glacial, GLACIAL, 'Glacial', 'rgb(255, 0, 0)', [2, 4, 6]);
    createOrigin(images.inferno, INFERNO, 'Inferno', 'rgb(255, 0, 0)', [3, 6, 9]);
    createOrigin(images.light, LIGHT, 'Light', 'rgb(255, 0, 0)', [3, 6, 9]);
    createOrigin(images.mountain, MOUNTAIN, 'Mountain', 'rgb(255, 0, 0)', [2]);
    createOrigin(images.ocean, OCEAN, 'Ocean', 'rgb(255, 0, 0)', [2, 4, 6]);
    createOrigin(images.poison, POISON, 'Poison', 'rgb(255, 0, 0)', [3]);
    createOrigin(images.shadow, SHADOW, 'Shadow', 'rgb(255, 0, 0)', [3, 6]);
    createOrigin(images.steel, STEEL, 'Steel', 'rgb(255, 0, 0)', [2, 3, 4]);
    createOrigin(images.woodland, WOODLAND, 'Woodland', 'rgb(255, 0, 0)', [3]);
};

const createRoles = () => {
    roles = [];
    createRole(images.alchemist, ALCHEMIST, 'Alchemist', [1]);
    createRole(images.assassin, ASSASSIN, 'Assassin', [3, 6]);
    createRole(images.avatar, AVATAR, 'Avatar', [1]);
    createRole(images.berserker, BERSERKER, 'Berserker', [3, 6]);
    createRole(images.blademaster, BLADEMASTER, 'Blademaster', [2, 4, 6]);
    createRole(images.druid, DRUID, 'Druid', [2]);
    createRole(images.mage, MAGE, 'Mage', [3, 6]);
    createRole(images.mystic, MYSTIC, 'Mystic', [2, 4]);
    createRole(images.predator, PREDATOR, 'Predator', [3]);
    createRole(images.ranger, RANGER, 'Ranger', [2, 4, 6]);
    createRole(images.soulbound, SOULBOUND, 'Soulbound', [2]);
    createRole(images.summoner, SUMMONER, 'Summoner', [3, 6]);
    createRole(images.warden, WARDEN, 'Warden', [2, 4, 6]);
};

// const createItems = () => {
//     items = [];
//     createItem(images.bfSword,       BF_SWORD,          'BF Sword');
//     createItem(images.recurveBow,    RECURVE_BOW,       'Recurve Bow');
//     createItem(images.chainVest,     CHAIN_VEST,        'Chain Vest');
//     createItem(images.negatronCloak, NEGATRON_CLOAK,    'Negatron Cloak');
//     createItem(images.tear,          TEAR,              'Tear');
//     createItem(images.giantsBelt,    GIANTS_BELT,       'Giants Belt');
//     createItem(images.spatula,       SPATULA,           'Spatula');
//     createItem(images.largeRod,      LARGE_ROD,         'Large Rod');
// };

const createChampions = () => {
    championId = 0;
    champions = [];
    createChampion(images.diana, 1, 'Diana', INFERNO, ASSASSIN);
    createChampion(images.ivern, 1, 'Ivern', WOODLAND, DRUID);
    createChampion(images.kogMaw, 1, 'Kogmaw', POISON, PREDATOR);
    createChampion(images.maokai, 1, 'Maokai', WOODLAND, DRUID);
    createChampion(images.nasus, 1, 'Nasus', LIGHT, WARDEN);
    createChampion(images.ornn, 1, 'Ornn', ELECTRIC, WARDEN);
    createChampion(images.renekton, 1, 'Renekton', DESERT, BERSERKER);
    createChampion(images.taliyah, 1, 'Taliyah', MOUNTAIN, MAGE);
    createChampion(images.vayne, 1, 'Vayne', LIGHT, RANGER);
    createChampion(images.vladimir, 1, 'Vladimir', OCEAN, MAGE);
    createChampion(images.warwick, 1, 'Warwick', GLACIAL, PREDATOR);
    createChampion(images.zyra, 1, 'Zyra', INFERNO, SUMMONER);
    createChampion(images.braum, 2, 'Braum', GLACIAL, WARDEN);
    createChampion(images.jax, 2, 'Jax', LIGHT, BERSERKER);
    createChampion(images.leBlanc, 2, 'LeBlanc', WOODLAND, [ASSASSIN, MAGE]);
    createChampion(images.malzahar, 2, 'Malzahar', SHADOW, SUMMONER);
    createChampion(images.neeko, 2, 'Neeko', WOODLAND, DRUID);
    createChampion(images.varus, 2, 'Varus', INFERNO, RANGER);
    createChampion(images.skarner, 2, 'Skarner', CRYSTAL, PREDATOR);
    createChampion(images.syndra, 2, 'Syndra', OCEAN, MAGE);
    createChampion(images.thresh, 2, 'Thresh', OCEAN, WARDEN);
    createChampion(images.rekSai, 2, 'Reksai', STEEL, PREDATOR);
    createChampion(images.senna, 2, 'Senna', SHADOW, SOULBOUND);
    createChampion(images.volibear, 2, 'Volibear', [ELECTRIC, GLACIAL], BERSERKER);
    createChampion(images.yasuo, 2, 'Yasuo', CLOUD, BLADEMASTER);
    createChampion(images.aatrox, 3, 'Aatrox', LIGHT, BLADEMASTER);
    createChampion(images.azir, 3, 'Azir', DESERT, SUMMONER);
    createChampion(images.drMundo, 3, 'DrMundo', POISON, BERSERKER);
    createChampion(images.ezreal, 3, 'Ezreal', GLACIAL, RANGER);
    createChampion(images.kindred, 3, 'Kindred', [SHADOW, INFERNO], RANGER);
    createChampion(images.nautilus, 3, 'Nautilus', OCEAN, WARDEN);
    createChampion(images.nocturne, 3, 'Nocturne', STEEL, ASSASSIN);
    createChampion(images.qiyanaCloud, 3, 'QiyanaCloud', CLOUD, ASSASSIN);
    createChampion(images.qiyanaInferno, 3, 'QiyanaInferno', INFERNO, ASSASSIN);
    createChampion(images.qiyanaMountain, 3, 'QiyanaMountain', MOUNTAIN, ASSASSIN);
    createChampion(images.qiyanaOcean, 3, 'QiyanaOcean', OCEAN, ASSASSIN);
    createChampion(images.sion, 3, 'Sion', SHADOW, BERSERKER);
    createChampion(images.sivir, 3, 'Sivir', DESERT, BLADEMASTER);
    createChampion(images.soraka, 3, 'Soraka', LIGHT, MYSTIC);
    createChampion(images.veigar, 3, 'Veigar', SHADOW, MAGE);
    createChampion(images.annie, 4, 'Annie', INFERNO, SUMMONER);
    createChampion(images.ashe, 4, 'Ashe', CRYSTAL, RANGER);
    createChampion(images.brand, 4, 'Brand', INFERNO, MAGE);
    createChampion(images.janna, 4, 'Janna', CLOUD, MYSTIC);
    createChampion(images.khazix, 4, 'Khazix', DESERT, ASSASSIN);
    createChampion(images.malphite, 4, 'Malphite', MOUNTAIN, WARDEN);
    createChampion(images.olaf, 4, 'Olaf', GLACIAL, BERSERKER);
    createChampion(images.twitch, 4, 'Twitch', POISON, RANGER);
    createChampion(images.yorick, 4, 'Yorick', LIGHT, SUMMONER);
    createChampion(images.lucian, 4, 'Lucian', LIGHT, SOULBOUND);
    createChampion(images.masterYi, 5, 'MasterYi', SHADOW, BLADEMASTER);
    createChampion(images.nami, 5, 'Nami', OCEAN, MYSTIC);
    createChampion(images.singed, 5, 'Singed', POISON, ALCHEMIST);
    createChampion(images.taric, 5, 'Taric', CRYSTAL, WARDEN);
    createChampion(images.zed, 5, 'Zed', ELECTRIC, [ASSASSIN, SUMMONER]);
    createChampion(images.amumu, 5, 'Amumu', INFERNO, WARDEN);
    createChampion(images.luxCloud, 5, 'LuxCloud', CLOUD, AVATAR);
    createChampion(images.luxCrystal, 7, 'LuxCrystal', CRYSTAL, AVATAR);
    createChampion(images.luxElectric, 7, 'LuxElectric', ELECTRIC, AVATAR);
    createChampion(images.luxGlacial, 7, 'LuxGlacial', GLACIAL, AVATAR);
    createChampion(images.luxInferno, 7, 'LuxInferno', INFERNO, AVATAR);
    createChampion(images.luxLight, 7, 'LuxLight', LIGHT, AVATAR);
    createChampion(images.luxOcean, 7, 'LuxOcean', OCEAN, AVATAR);
    createChampion(images.luxShadow, 7, 'LuxShadow', SHADOW, AVATAR);
    createChampion(images.luxSteel, 7, 'LuxSteel', STEEL, AVATAR);
    createChampion(images.luxWoodland, 7, 'LuxWoodland', WOODLAND, AVATAR);
};

export const setup = () => {
    createOrigins();
    createRoles();
    // createItems();
    createChampions();
};

export const getOrigins = () => {
    return origins.slice(0);
};

export const getChampions = () => {
    return champions.slice(0);
};

export const getRoles = () => {
    return roles.slice(0);
};

export const getItems = () => {
    return items.slice(0);
};

export const getRow = () => {
    return row.slice(0);
}