import React, { Component } from 'react';
import queryString from 'query-string';
import './App.css';
import { setup, getChampions, getRoles, getOrigins, getItems } from '../../misc/setup';
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
        this.champions = getChampions();
        this.items = getItems();
        const champions = this.champions.map(champion => ({ 
            champion, 
            selected: false 
        }));

        if (window.location.search.length > 0) {
            const params = queryString.parse(window.location.search); 
            const names = params[Object.keys(params)[0]].split(',').map(n => n.toLowerCase());
            const paramChampions =  this.champions
                .filter(c => names.includes(c.name.toLowerCase()))
                .map(c => c.name.toLowerCase());
            const paramItems =  this.items.filter(i => names.includes(i.name.toLowerCase()));
            for (let champ of champions) {
                if (paramChampions.includes(champ.champion.name.toLowerCase())) {
                    champ.selected = true;
                }
            }
            console.log(paramChampions);
        }

        this.state = { champions, link: this.getLink(champions) };
    }

    onClick = (id, selected) => {
        const champions = this.state.champions;
        champions.forEach(c => {
            if (c.champion.id === id) {
                c.selected = !selected;
            }
        });
        const link = this.getLink(champions);
        if (link.indexOf('?') > 0) {
            window.history.replaceState({}, '', link.substr(link.indexOf('?'), link.length));
        }
        this.setState({ champions, link });
    }

    onReset = () => {
        const champions = this.state.champions;
        champions.forEach(c => c.selected = false);
        this.setState({ champions });
    }

    getLink = (list) => {
        const champions = list
            .filter(c => c.selected)
            .map(c => c.champion.name.toLowerCase())
            .join(',');
        return `${process.env.REACT_APP_HOST}${champions.length > 0 ? `?names=${champions}` : ''}`;
    }

    render() {
        if (this.state == null) {
            return <div>Loading...</div>;
        }
        const buttonStyle = {
            position: 'absolute', 
            top: '179px', 
            left: '296px', 
            cursor: 'pointer'
        }

        return (
            <div style={{zoom: window.innerWidth <= 500 ? '150%' : '100%'}}>
                {this.renderStatus()}
                {this.renderSelectedChampions()}
                <button 
                    style={buttonStyle} 
                    onClick={() => this.onReset()}
                >
                    Reset
                </button>
                
                <ChampionGrid 
                    champions={this.state.champions} 
                    onClick={this.onClick} 
                />
            </div>
        )
    }

    renderSelectedChampions() {
        const champions = this.state.champions.filter(c => c.selected === true);
        const pStyle = {
            color: 'white', 
            marginLeft: '6px'
        };
        return (
            <div className='selected-content'>
                <p style={pStyle}>{`${champions.length}/9`}</p>
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