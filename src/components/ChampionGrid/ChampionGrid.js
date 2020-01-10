import React from 'react';
import Champion from '../Champion/Champion';
import './ChampionGrid.css';
import { getOrigins, getRoles, getChampions, getRow } from '../../misc/setup';

let list = [];
let origins = [];
let roles = [];
let allChampions = [];
let func;

const createChampion = (name) => {
    const champion = list.find(x => x.champion.name.toLowerCase() === name.toLowerCase())
    return (
        <Champion 
            key={`champion${champion.champion.id}`}
            champion={champion.champion}
            selected={champion.selected}
            onClick={func}
            markAsSelected={champion.selected}
        />
    );
};

const createIcon = (name) => {
    const item = 
             roles.find(x => x.name.toLowerCase() === name.toLowerCase())
        || origins.find(x => x.name.toLowerCase() === name.toLowerCase());

    return (
        <img width='24px' style={{ padding: '4px' }} src={item.image} alt='item' />
    )
};

const createTrDesktop = (origin) => {
    const row = getRow();
    const list = new Array(row.length);
    for (let i = 0; i < list.length; ++i) {
        list[i] = [];
    }
    const champions = allChampions
        .filter(x => x.origins.includes(origins.find(y => y.name.toLowerCase() === origin).id));

    for (let champ of champions) {
        const items = [];
        for (let role of champ.roles) {
            items.push({ 
                id: row[role], 
                name: champ.name 
            });
        }
        for (let item of items) {
            list[item.id].push(item.name);
        }
    }

    const jsx = [];
    let index = 0;
    for (let item of list) {
        const championJsx = [];
        for (let champ of item) {
            championJsx.push(createChampion(champ));
        }
        jsx.push(<td key={`jsx${index++}`}>{championJsx}</td>);
    }

    return (
        <tr>
            <td>{createIcon(origin)}</td>
            {jsx}
        </tr>
    );
}


const createTrMobile = (origin) => {
    const row = getRow();
    const list = new Array(row.length);
    for (let i = 0; i < list.length; ++i) {
        list[i] = [];
    }
    const champions = allChampions
        .filter(x => x.origins.includes(origins.find(y => y.name.toLowerCase() === origin).id));
    console.log(champions);

    for (let champ of champions) {
        const items = [];
        for (let role of champ.roles) {
            items.push({ 
                id: row[role], 
                name: champ.name 
            });
        }
        for (let item of items) {
            list[item.id].push(item.name);
        }
    }

    const jsx = [];
    let index = 0;
    for (let item of list) {
        for (let champ of item) {
            jsx.push(<td key={`jsx${index++}`}>{createChampion(champ)}</td>);
        }
    }

    return (
        <tr>
            <td>{createIcon(origin)}</td>
            {jsx}
        </tr>
    );
}

const classesList = [
    "assassin",
    "alchemist",
    "avatar",
    "berserker",
    "blademaster",
    "druid",
    "mage",
    "mystic",
    "predator",
    "ranger",
    "soulbound",
    "summoner",
    "warden",
];

const originsList = [
    "cloud",
    "crystal",
    "desert",
    "electric",
    "glacial",
    "lunar",
    "inferno",
    "light",
    "mountain",
    "ocean",
    "poison",
    "shadow",
    "steel",
    "woodland",
];

const renderDesktop = () => {
    return (
        <div className='champions'>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        {classesList.map((item) => <th>{createIcon(item)}</th>)}
                    </tr>
                    {originsList.map((item) => createTrDesktop(item))}
                </tbody>
            </table>
        </div>
    );
};

const renderMobile = () => {
    return (
        <div className='champions'>
            <table>
                <tbody>
                    {originsList.map((item) => createTrMobile(item))}
                </tbody>
            </table>
        </div>
    );
};

export const ChampionGrid = ({champions, onClick}) => {
    origins = getOrigins();
    roles = getRoles();
    allChampions = getChampions();
    list = champions;
    func = onClick;

    const isDesktop = window.innerWidth > 500;
    return isDesktop 
        ? renderDesktop()
        : renderMobile();
};

export default ChampionGrid;