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

const createTr = (origin) => {
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

export const ChampionGrid = ({champions, onClick}) => {
    origins = getOrigins();
    roles = getRoles();
    allChampions = getChampions();
    list = champions;
    func = onClick;

    return (
        <div className='champions'>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>{createIcon('alchemist')}</th>
                        <th>{createIcon('assassin')}</th>
                        <th>{createIcon('avatar')}</th>
                        <th>{createIcon('berserker')}</th>
                        <th>{createIcon('blademaster')}</th>
                        <th>{createIcon('druid')}</th>
                        <th>{createIcon('mage')}</th>
                        <th>{createIcon('mystic')}</th>
                        <th>{createIcon('predator')}</th>
                        <th>{createIcon('ranger')}</th>
                        <th>{createIcon('soulbound')}</th>
                        <th>{createIcon('summoner')}</th>
                        <th>{createIcon('warden')}</th>
                    </tr>
                    {createTr('cloud')}
                    {createTr('crystal')}
                    {createTr('desert')}
                    {createTr('electric')}
                    {createTr('glacial')}
                    {createTr('inferno')}
                    {createTr('light')}
                    {createTr('mountain')}
                    {createTr('ocean')}
                    {createTr('poison')}
                    {createTr('shadow')}
                    {createTr('steel')}
                    {createTr('woodland')}
                </tbody>
            </table>
        </div>
    );
};

export default ChampionGrid;