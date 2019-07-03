import React from 'react';
import Champion from '../Champion/Champion';
import './ChampionGrid.css';
import { getOrigins, getRoles } from '../../misc/setup';

let list = [];
let origins = [];
let roles = [];
let func = undefined;

const c = (name) => {
    const champion = list.find(x => x.champion.name.toLowerCase() === name.toLowerCase())
    return (
        <Champion 
            champion={champion.champion}
            selected={champion.selected}
            onClick={func}
            markAsSelected={champion.selected}
        />
    );
};

const i = (name) => {
    const item = 
           roles.find(x => x.name.toLowerCase() === name.toLowerCase())
        || origins.find(x => x.name.toLowerCase() === name.toLowerCase());

    return (
        <img src={item.image} alt='item' />
    )
};

const demons = () => {
    return (
        <tr>
            <td>{i('demon')}</td>
            <td>{c('evelynn')}</td>
            <td>{c('aatrox')}</td>
            <td></td>
            <td>{c('brand')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{c('varus')}</td>
            <td>{c('elise')}{c('swain')}</td>
            <td>{c('morgana')}</td>
        </tr>
    );
};

const dragons = () => {
    return (
        <tr>
            <td>{i('dragon')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{c('shyvana')}</td>
            <td>{c('aurelion sol')}</td>
        </tr>
    );
};

const exiles = () => {
    return (
        <tr>
            <td>{i('exile')}</td>
            <td></td>
            <td>{c('yasuo')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    );
};

const glacials = () => {
    return (
        <tr>
            <td>{i('glacial')}</td>
            <td></td>
            <td></td>
            <td>{c('volibear')}</td>
            <td>{c('lissandra')}{c('anivia')}</td>
            <td>{c('braum')}</td>
            <td></td>
            <td>{c('sejuani')}</td>
            <td>{c('ashe')}</td>
            <td></td>
            <td></td>
        </tr>
    );
};

const robots = () => {
    return (
        <tr>
            <td>{i('robot')}</td>
            <td></td>
            <td></td>
            <td>{c('blitzcrank')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    );
};

const imperials = () => {
    return (
        <tr>
            <td>{i('imperial')}</td>
            <td>{c('katarina')}</td>
            <td>{c('draven')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{c('darius')}</td>
            <td></td>
            <td>{c('swain')}</td>
            <td></td>
        </tr>
    );
};

const nobles = () => {
    return (
        <tr>
            <td>{i('noble')}</td>
            <td></td>
            <td>{c('fiora')}</td>
            <td></td>
            <td></td>
            <td>{c('leona')}</td>
            <td>{c('lucian')}</td>
            <td>{c('garen')}{c('kayle')}</td>
            <td>{c('vayne')}</td>
            <td></td>
            <td></td>
        </tr>
    );
};

const ninjas = () => {
    return (
        <tr>
            <td>{i('ninja')}</td>
            <td>{c('akali')}{c('zed')}</td>
            <td>{c('shen')}</td>
            <td></td>
            <td>{c('kennen')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    );
};

const phantoms = () => {
    return (
        <tr>
            <td>{i('phantom')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{c('mordekaiser')}</td>
            <td>{c('kindred')}</td>
            <td></td>
            <td></td>
        </tr>
    );
};

const pirates = () => {
    return (
        <tr>
            <td>{i('phantom')}</td>
            <td>{c('pyke')}</td>
            <td>{c('gangplank')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{c('gangplank')}{c('graves')}{c('miss fortune')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    );
};

const voids = () => {
    return (
        <tr>
            <td>{i('void')}</td>
            <td>{c('kha\'zix')}</td>
            <td></td>
            <td>{c('cho\'gath')}{c('rek\'sai')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{c('kassadin')}</td>
        </tr>
    );
};

const wilds = () => {
    return (
        <tr>
            <td>{i('wild')}</td>
            <td>{c('rengar')}</td>
            <td></td>
            <td>{c('warwick')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{c('gnar')}{c('nidalee')}</td>
            <td>{c('ahri')}</td>
        </tr>
    );
};

const yordles = () => {
    return (
        <tr>
            <td>{i('yordle')}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{c('kennen')}</td>
            <td></td>
            <td>{c('tristana')}</td>
            <td>{c('poppy')}</td>
            <td></td>
            <td>{c('gnar')}</td>
            <td>{c('lulu')}{c('veigar')}</td>
        </tr>
    );
};

export const ChampionGrid = ({champions, onClick}) => {
    origins = getOrigins();
    roles = getRoles();
    list = champions;
    func = onClick;

    return (
        <div className='champions'>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>{i('assassin')}</th>
                        <th>{i('blademaster')}</th>
                        <th>{i('brawler')}</th>
                        <th>{i('elementalist')}</th>
                        <th>{i('guardian')}</th>
                        <th>{i('gunslinger')}</th>
                        <th>{i('knight')}</th>
                        <th>{i('ranger')}</th>
                        <th>{i('shapeshifter')}</th>
                        <th>{i('sorcerer')}</th>
                    </tr>
                    {demons()}
                    {dragons()}
                    {exiles()}
                    {glacials()}
                    {robots()}
                    {imperials()}
                    {nobles()}
                    {ninjas()}
                    {phantoms()}
                    {pirates()}
                    {voids()}
                    {wilds()}
                    {yordles()}
                </tbody>
            </table>
        </div>
    );
};

export default ChampionGrid;

/*
<td></td>
                    <td>demon</td>
                    <td>dragon</td>
                    <td>exile</td>
                    <td>glacial</td>
                    <td>robot</td>
                    <td>imperial</td>
                    <td>noble</td>
                    <td>ninja</td>
                    <td>phantom</td>
                    <td>pirate</td>
                    <td>void</td>
                    <td>wild</td>
                    <td>yordle</td>
*/