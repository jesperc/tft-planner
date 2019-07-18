import Origin from '../models/origin';
import Role from '../models/role';
import Champion from '../models/champion';
import Item from '../models/item';
import * as images from './images'; 

const DEMON = 0;
const DRAGON = 1;
const EXILE = 2;
const IMPERIAL = 3;
const NOBLE = 4;
const NINJA = 5;
const PHANTOM = 6;
const ROBOT = 7;
const VOID = 8;
const WILD = 9;
const YORDLE = 10;
const PIRATE = 11;
const GLACIAL = 12;

const ASSASSIN = 0;
const BLADEMASTER = 1;
const BRAWLER = 2;
const ELEMENTALIST = 3;
const GUARDIAN = 4;
const GUNSLINGER = 5;
const KNIGHT = 6;
const RANGER = 7;
const SHAPESHIFTER = 8;
const SORCERER = 9;
const ROLE_COUNT = 10;

const BF_SWORD = 0;
const CHAIN_VEST = 1;    
const GIANTS_BELT = 2;   
const LARGE_ROD = 3;     
const NEGATRON_CLOAK = 4;
const RECURVE_BOW = 5;   
const SPATULA = 6;      
const TEAR = 7;         

const row = [...Array(ROLE_COUNT).keys()];

let origins = [];
let roles = [];
let items = [];
let champions = [];
let championId = 0;

const createOrigin = (image, id, name, color, interval) => {
    origins.push(new Origin({image, id, name, color, interval}));
};

const createRole = (image, id, name, interval) => {
    roles.push(new Role({image, id, name, interval}));
};

const createItem = (image, id, name) => {
    items.push(new Item({image, id, name}));
};

const createChampion = (image, tier, name, origin, role) => {
    let origins = origin;
    if (origin.constructor !== Array) {
        origins = [origin];
    }
    let roles = role;
    if (role.constructor !== Array) {
        roles = [role];
    }

    champions.push(new Champion({image, tier, id: championId++, name, origins, roles}));
};

const createOrigins = () => {
    origins = [];
    createOrigin(images.demon,      DEMON,     'Demon',    'rgb(255, 0, 0)', [2, 4, 6]);
    createOrigin(images.dragon,     DRAGON,    'Dragon',   'rgb(255, 0, 0)', [2]);
    createOrigin(images.exile,      EXILE,     'Exile',    'rgb(255, 0, 0)', [1]);
    createOrigin(images.imperial,   IMPERIAL,  'Imperial', 'rgb(255, 0, 0)', [2, 4]);
    createOrigin(images.noble,      NOBLE,     'Noble',    'rgb(255, 0, 0)', [3, 6]);
    createOrigin(images.ninja,      NINJA,     'Ninja',    'rgb(255, 0, 0)', [1, 4]);
    createOrigin(images.phantom,    PHANTOM,   'Phantom',  'rgb(255, 0, 0)', [2]);
    createOrigin(images.pirate,     PIRATE,    'Pirate',   'rgb(255, 0, 0)', [3]);
    createOrigin(images.robot,      ROBOT,     'Robot',    'rgb(255, 0, 0)', [1]);
    createOrigin(images.voidd,      VOID,      'Void',     'rgb(255, 0, 0)', [3]);
    createOrigin(images.wild,       WILD,      'Wild',     'rgb(255, 0, 0)', [2, 4]);
    createOrigin(images.yordle,     YORDLE,    'Yordle',   'rgb(255, 0, 0)', [3, 6]);
    createOrigin(images.glacial,    GLACIAL,   'Glacial',  'rgb(255, 0, 0)', [2, 4, 6]);
};

const createRoles = () => {
    roles = [];
    createRole(images.assassin,     ASSASSIN,        'Assassin',     [3, 6]);
    createRole(images.blademaster,  BLADEMASTER,     'Blademaster',  [3, 6]);
    createRole(images.brawler,      BRAWLER,         'Brawler',      [2, 4]);
    createRole(images.elementalist, ELEMENTALIST,    'Elementalist', [3]);
    createRole(images.guardian,     GUARDIAN,        'Guardian',     [2]);
    createRole(images.gunslinger,   GUNSLINGER,      'Gunslinger',   [2, 4]);
    createRole(images.knight,       KNIGHT,          'Knight',       [2, 4, 6]);
    createRole(images.ranger,       RANGER,          'Ranger',       [2, 4]);
    createRole(images.shapeshifter, SHAPESHIFTER,    'Shapeshifter', [3]);
    createRole(images.sorcerer,     SORCERER,        'Sorcerer',     [3, 6]);
};

const createItems = () => {
    items = [];
    createItem(images.bfSword,       BF_SWORD, 'BF Sword');
    createItem(images.recurveBow,    RECURVE_BOW, 'Recurve Bow');
    createItem(images.chainVest,     CHAIN_VEST, 'Chain Vest');
    createItem(images.negatronCloak, NEGATRON_CLOAK, 'Negatron Cloak');
    createItem(images.tear,          TEAR, 'Tear');
    createItem(images.giantsBelt,    GIANTS_BELT, 'Giants Belt');
    createItem(images.spatula,       SPATULA, 'Spatula');
    createItem(images.largeRod,      LARGE_ROD, 'Large Rod');
};

const createChampions = () => {
    championId = 0;
    champions = [];
    createChampion(images.darius,       1, 'Darius',         IMPERIAL,           KNIGHT);
    createChampion(images.fiora,        1, 'Fiora',          NOBLE,              BLADEMASTER);
    createChampion(images.garen,        1, 'Garen',          NOBLE,              KNIGHT);
    createChampion(images.graves,       1, 'Graves',         PIRATE,             GUNSLINGER);
    createChampion(images.kassadin,     1, 'Kassadin',       VOID,               SORCERER);
    createChampion(images.khazix,       1, 'Kha\'zix',       VOID,               ASSASSIN);
    createChampion(images.mordekaiser,  1, 'Mordekaiser',    PHANTOM,            KNIGHT);
    createChampion(images.nidalee,      1, 'Nidalee',        WILD,               SHAPESHIFTER);
    createChampion(images.tristana,     1, 'Tristana',       YORDLE,             GUNSLINGER);
    createChampion(images.vayne,        1, 'Vayne',          NOBLE,              RANGER);
    createChampion(images.warwick,      1, 'Warwick',        WILD,               BRAWLER);
    createChampion(images.ahri,         2, 'Ahri',           WILD,               SORCERER);
    createChampion(images.twistedFate,  2, 'Twisted Fate',   PIRATE,             SORCERER);
    createChampion(images.blitzcrank,   2, 'Blitzcrank',     ROBOT,              BRAWLER);
    createChampion(images.braum,        2, 'Braum',          GLACIAL,            GUARDIAN);
    createChampion(images.elise,        2, 'Elise',          DEMON,              SHAPESHIFTER);
    createChampion(images.lissandra,    2, 'Lissandra',      GLACIAL,            ELEMENTALIST);
    createChampion(images.lucian,       2, 'Lucian',         NOBLE,              GUNSLINGER);
    createChampion(images.lulu,         2, 'Lulu',           YORDLE,             SORCERER);
    createChampion(images.pyke,         2, 'Pyke',           PIRATE,             ASSASSIN);
    createChampion(images.reksai,       2, 'Rek\'sai',       VOID,               BRAWLER);
    createChampion(images.shen,         2, 'Shen',           NINJA,              BLADEMASTER);
    createChampion(images.varus,        2, 'Varus',          DEMON,              RANGER);
    createChampion(images.zed,          2, 'Zed',            NINJA,              ASSASSIN);
    createChampion(images.aatrox,       3, 'Aatrox',         DEMON,              BLADEMASTER);
    createChampion(images.ashe,         3, 'Ashe',           GLACIAL,            RANGER);
    createChampion(images.evelynn,      3, 'Evelynn',        DEMON,              ASSASSIN);
    createChampion(images.gangplank,    3, 'Gangplank',      PIRATE,             [BLADEMASTER, GUNSLINGER]);
    createChampion(images.katarina,     3, 'Katarina',       IMPERIAL,           ASSASSIN);
    createChampion(images.kennen,       3, 'Kennen',         [NINJA, YORDLE],    ELEMENTALIST);
    createChampion(images.morgana,      3, 'Morgana',        DEMON,              SORCERER);
    createChampion(images.poppy,        3, 'Poppy',          YORDLE,             KNIGHT);
    createChampion(images.rengar,       3, 'Rengar',         WILD,               ASSASSIN);
    createChampion(images.shyvana,      3, 'Shyvana',        DRAGON,             SHAPESHIFTER);
    createChampion(images.veigar,       3, 'Veigar',         YORDLE,             SORCERER);
    createChampion(images.volibear,     3, 'Volibear',       GLACIAL,            BRAWLER);
    createChampion(images.akali,        4, 'Akali',          NINJA,              ASSASSIN);
    createChampion(images.aurelionSol,  4, 'Aurelion Sol',   DRAGON,             SORCERER);
    createChampion(images.brand,        4, 'Brand',          DEMON,              ELEMENTALIST);
    createChampion(images.chogath,      4, 'Cho\'gath',      VOID,               BRAWLER);
    createChampion(images.draven,       4, 'Draven',         IMPERIAL,           BLADEMASTER);
    createChampion(images.gnar,         4, 'Gnar',           [WILD, YORDLE],     SHAPESHIFTER);
    createChampion(images.kindred,      4, 'Kindred',        [WILD, PHANTOM],    RANGER);
    createChampion(images.leona,        4, 'Leona',          NOBLE,              GUARDIAN);
    createChampion(images.sejuani,      4, 'Sejuani',        GLACIAL,            KNIGHT);
    createChampion(images.anivia,       5, 'Anivia',         GLACIAL,            ELEMENTALIST);
    createChampion(images.karthus,      5, 'Karthus',        PHANTOM,            SORCERER);
    createChampion(images.kayle,        5, 'Kayle',          NOBLE,              KNIGHT);
    createChampion(images.missFortune,  5, 'Miss Fortune',   PIRATE,             GUNSLINGER);
    createChampion(images.swain,        5, 'Swain',          [IMPERIAL, DEMON],  SHAPESHIFTER);
    createChampion(images.yasuo,        5, 'Yasuo',          EXILE,              BLADEMASTER);
};

export const setup = () => {
    createOrigins();
    createRoles();
    createItems();
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