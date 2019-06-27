import Origin from '../models/origin';
import Role from '../models/role';
import Champion from '../models/champion';

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
const RANGER = 8;
const SHAPESHIFTER = 8;
const SORCERER = 9;

let origins = [];
let roles = [];
let champions = [];
let championId = 0;

const createOrigin = (id, name, color, interval) => {
    origins.push(new Origin({id, name, color, interval}));
};

const createRole = (id, name, interval) => {
    roles.push(new Role({id, name, interval}));
};

const createChampion = (tier, name, origin, role) => {
    let origins = origin;
    if (origin.constructor !== Array) {
        origins = [origin];
    }
    let roles = role;
    if (role.constructor !== Array) {
        roles = [role];
    }

    champions.push(new Champion({tier, id: championId++, name, origins, roles}));
};

const createOrigins = () => {
    origins = [];
    createOrigin(DEMON,     'Demon',    'rgb(255, 0, 0)', [2, 4, 6]);
    createOrigin(DRAGON,    'Dragon',   'rgb(255, 0, 0)', [2]);
    createOrigin(EXILE,     'Exile',    'rgb(255, 0, 0)', [1]);
    createOrigin(IMPERIAL,  'Imperial', 'rgb(255, 0, 0)', [2, 4]);
    createOrigin(NOBLE,     'Noble',    'rgb(255, 0, 0)', [3, 6]);
    createOrigin(NINJA,     'Ninja',    'rgb(255, 0, 0)', [1, 4]);
    createOrigin(PHANTOM,   'Phantom',  'rgb(255, 0, 0)', [2]);
    createOrigin(PIRATE,    'Pirate',   'rgb(255, 0, 0)', [3]);
    createOrigin(ROBOT,     'Robot',    'rgb(255, 0, 0)', [1]);
    createOrigin(VOID,      'Void',     'rgb(255, 0, 0)', [3]);
    createOrigin(WILD,      'Wild',     'rgb(255, 0, 0)', [2, 4]);
    createOrigin(YORDLE,    'Yordle',   'rgb(255, 0, 0)', [3, 6]);
};

const createRoles = () => {
    roles = [];
    createRole(ASSASSIN,        'Assassin',     [3, 6]);
    createRole(BLADEMASTER,     'Blademaster',  [3, 6]);
    createRole(BRAWLER,         'Brawler',      [2, 4]);
    createRole(ELEMENTALIST,    'Elementalist', [3]);
    createRole(GUARDIAN,        'Guardian',     [2]);
    createRole(GUNSLINGER,      'Gunslinger',   [2, 4]);
    createRole(KNIGHT,          'Knight',       [2, 4, 6]);
    createRole(RANGER,          'Ranger',       [2, 4]);
    createRole(SHAPESHIFTER,    'Shapeshifter', [3]);
    createRole(SORCERER,        'Sorcerer',     [3, 6]);
};

const createChampions = () => {
    championId = 0;
    champions = [];
    createChampion(1, 'Darius',         IMPERIAL,           KNIGHT);
    createChampion(1, 'Fiora',          NOBLE,              BLADEMASTER);
    createChampion(1, 'Garen',          NOBLE,              KNIGHT);
    createChampion(1, 'Graves',         PIRATE,             GUNSLINGER);
    createChampion(1, 'Kassadin',       VOID,               SORCERER);
    createChampion(1, 'Kha\'zix',       VOID,               ASSASSIN);
    createChampion(1, 'Mordekaiser',    PHANTOM,            KNIGHT);
    createChampion(1, 'Nidalee',        WILD,               SHAPESHIFTER);
    createChampion(1, 'Tristana',       YORDLE,             GUNSLINGER);
    createChampion(1, 'Vayne',          NOBLE,              RANGER);
    createChampion(1, 'Warwick',        WILD,               BRAWLER);
    createChampion(2, 'Ahri',           WILD,               SORCERER);
    createChampion(2, 'Blitzcrank',     ROBOT,              BRAWLER);
    createChampion(2, 'Braum',          GLACIAL,            GUARDIAN);
    createChampion(2, 'Elise',          DEMON,              SHAPESHIFTER);
    createChampion(2, 'Lissandra',      GLACIAL,            ELEMENTALIST);
    createChampion(2, 'Lucian',         NOBLE,              GUNSLINGER);
    createChampion(2, 'Lulu',           YORDLE,             SORCERER);
    createChampion(2, 'Pyke',           PIRATE,             ASSASSIN);
    createChampion(2, 'Rek\'sai',       VOID,               BRAWLER);
    createChampion(2, 'Shen',           NINJA,              BLADEMASTER);
    createChampion(2, 'Varus',          DEMON,              RANGER);
    createChampion(2, 'Zed',            NINJA,              ASSASSIN);
    createChampion(3, 'Aatrox',         DEMON,              BLADEMASTER);
    createChampion(3, 'Ashe',           GLACIAL,            RANGER);
    createChampion(3, 'Evelynn',        DEMON,              ASSASSIN);
    createChampion(3, 'Gangplank',      PIRATE,             [BLADEMASTER, GUNSLINGER]);
    createChampion(3, 'Katarina',       IMPERIAL,           ASSASSIN);
    createChampion(3, 'Kennen',         [NINJA, YORDLE],    ELEMENTALIST);
    createChampion(3, 'Morgana',        DEMON,              SORCERER);
    createChampion(3, 'Poppy',          YORDLE,             KNIGHT);
    createChampion(3, 'Rengar',         WILD,               ASSASSIN);
    createChampion(3, 'Shyvana',        DRAGON,             SHAPESHIFTER);
    createChampion(3, 'Veigar',         YORDLE,             SORCERER);
    createChampion(3, 'Volibear',       GLACIAL,            BRAWLER);
    createChampion(4, 'Akali',          NINJA,              ASSASSIN);
    createChampion(4, 'Aurelion Sol',   DRAGON,             SORCERER);
    createChampion(4, 'Brand',          DEMON,              ELEMENTALIST);
    createChampion(4, 'Cho\'gath',      VOID,               BRAWLER);
    createChampion(4, 'Draven',         IMPERIAL,           BLADEMASTER);
    createChampion(4, 'Gnar',           [WILD, YORDLE],     SHAPESHIFTER);
    createChampion(4, 'Kindred',        WILD,               RANGER);
    createChampion(4, 'Leona',          NOBLE,              GUARDIAN);
    createChampion(4, 'Sejuani',        GLACIAL,            KNIGHT);
    createChampion(5, 'Anivia',         GLACIAL,            ELEMENTALIST);
    createChampion(5, 'Karthus',        PHANTOM,            SORCERER);
    createChampion(5, 'Kayle',          NOBLE,              KNIGHT);
    createChampion(5, 'Miss Fortune',   PIRATE,             GUNSLINGER);
    createChampion(5, 'Swain',          [IMPERIAL, DEMON],  SHAPESHIFTER);
    createChampion(5, 'Yasuo',          EXILE,              BLADEMASTER);
};

export const setup = () => {
    createOrigins();
    createRoles();
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