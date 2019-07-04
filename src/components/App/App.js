import React, { Component } from 'react';
import './App.css';
import { setup, getChampions, getRoles, getOrigins } from '../../misc/setup';
import Status from '../Status/Status';
import ChampionGrid from '../ChampionGrid/ChampionGrid';
import Champion from '../Champion/Champion';
import * as colors from '../../misc/colors';

export default class App extends Component {
    constructor() {
        super();
        setup();
        this.roles = getRoles();
        this.origins = getOrigins();
        this.state = {
            champions: getChampions().map(champion => ({ 
                champion, 
                selected: false 
            }))
        };
    }

    onClick = (id, selected) => {
        const champions = this.state.champions;
        champions.forEach(c => {
            if (c.champion.id === id) {
                c.selected = !selected;
            }
        });
        this.setState({ champions });
    }

    onReset = () => {
        const champions = this.state.champions;
        champions.forEach(c => c.selected = false);
        this.setState({ champions });
    }

    render() {
        if (this.state == null) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                {this.renderStatus()}
                {this.renderSelectedChampions()}
                <button style={{position: 'absolute', top: '184px', left: '296px', cursor: 'pointer'}} onClick={() => this.onReset()}>Reset</button>
                <ChampionGrid champions={this.state.champions} onClick={this.onClick} />
            </div>
        )
    }

    renderSelectedChampions() {
        const champions = this.state.champions.filter(c => c.selected === true);
        return (
            <div className='selected-content'>
                <p style={{color: 'white', marginLeft: '6px'}}>{`${champions.length}/9`}</p>
                {champions.map(x => 
                    <Champion 
                        key={`sc${x.champion.id}`} 
                        champion={x.champion} 
                        selected={true}
                        onClick={this.onClick}
                        markAsSelected={false}
                    />
                )}
            </div>
        );
    }

    renderStatus() {
        const selected = this.state.champions.filter(c => c.selected).slice(0);
        const origins = [];
        const roles = [];

        // get all origin and roles from selected champions
        for (let champion of selected) {
            let items = this.origins.filter(x => champion.champion.origins.includes(x.id));
            if (items.length > 0) {
                origins.push(...items);
            }
            items = this.roles.filter(x => champion.champion.roles.includes(x.id));
            if (items.length > 0) {
                roles.push(...items);
            }
        }

        // count origins/roles
        const counts = {};
        const items = {};
        origins.concat(roles).map(x => x.name).forEach(x => { 
            counts[x] = (counts[x] || 0) + 1; 
            items[x] = origins.find(o => o.name === x) || roles.find(r => r.name === x);
        });

        // create a status per origin/role
        const statuses = [];
        const keys = Object.keys(counts);
        for (let key of keys) {
            statuses.push({ 
                name: key,
                count: counts[key],  
                item: items[key]
            });
        }

        if (statuses.length <= 0) {
            return null;
        }

        statuses.forEach(x => {
            x.color = 'grey';
            if (x.item.interval.length === 1 && x.count >= x.item.interval[0]) x.color = colors.gold;
            if (x.item.interval.length === 2 && x.count >= x.item.interval[0]) x.color = colors.silver;
            if (x.item.interval.length === 2 && x.count >= x.item.interval[1]) x.color = colors.gold;
            if (x.item.interval.length === 3 && x.count >= x.item.interval[0]) x.color = colors.bronze;
            if (x.item.interval.length === 3 && x.count >= x.item.interval[1]) x.color = colors.silver;
            if (x.item.interval.length === 3 && x.count >= x.item.interval[2]) x.color = colors.gold;
        });
        const colorToOrder = (color) => {
            return color === colors.bronze
                ? 1 
                : color === colors.silver
                    ? 2
                    : color === colors.gold 
                        ? 3
                        : 0;
        };
        statuses.sort((a, b) => {
            return colorToOrder(a.color) > colorToOrder(b.color)
                ? -1
                : 1;
        });

        return (
            <div className='status-content'>
                <ul>
                    {statuses.map(x => <Status key={`s${x.name}`} {...x}/>)}
                </ul>
            </div>
        );
    }
};