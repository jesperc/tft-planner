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
                        <th>{createIcon('assassin')}</th>
                        <th>{createIcon('blademaster')}</th>
                        <th>{createIcon('brawler')}</th>
                        <th>{createIcon('elementalist')}</th>
                        <th>{createIcon('guardian')}</th>
                        <th>{createIcon('gunslinger')}</th>
                        <th>{createIcon('knight')}</th>
                        <th>{createIcon('ranger')}</th>
                        <th>{createIcon('shapeshifter')}</th>
                        <th>{createIcon('sorcerer')}</th>
                    </tr>
                    {createTr('demon')}
                    {createTr('dragon')}
                    {createTr('exile')}
                    {createTr('glacial')}
                    {createTr('robot')}
                    {createTr('imperial')}
                    {createTr('noble')}
                    {createTr('ninja')}
                    {createTr('phantom')}
                    {createTr('pirate')}
                    {createTr('void')}
                    {createTr('wild')}
                    {createTr('yordle')}
                </tbody>
            </table>
        </div>
    );
};

export default ChampionGrid;