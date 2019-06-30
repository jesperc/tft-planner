import React, { Component } from 'react';
import { setup, getChampions, getRoles, getOrigins } from '../misc/setup';
import Status from './Status';
import Champion from './Champion';

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

    render() {
        if (this.state == null) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                {this.renderStatus()}
                <hr />
                {this.renderSelectedChampions()}
                <hr />
                {this.renderAllChampions()}
            </div>
        )
    }

    renderSelectedChampions() {
        const champions = this.state.champions.filter(c => c.selected === true);
        console.log(champions);
        return (
            <div>
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

    renderAllChampions() {
        
        return (
            <div>
                {this.state.champions.map(x => 
                    <Champion 
                        key={`ac${x.champion.id}`} 
                        champion={x.champion} 
                        selected={x.selected}
                        onClick={this.onClick}
                        markAsSelected={x.selected}
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
        const intervals = {};
        origins.concat(roles).map(x => x.name).forEach(x => { 
            counts[x] = (counts[x] || 0) + 1; 
            intervals[x] = origins.find(o => o.name === x) || roles.find(r => r.name === x);
        });

        console.log(origins.concat(roles));

        // create a status per origin/role
        const statuses = [];
        const keys = Object.keys(counts);
        for (let key of keys) {
            statuses.push({ 
                name: key,
                count: counts[key],  
                interval: intervals[key].interval
            });
        }

        if (statuses.length <= 0) {
            return null;
        }

        return (
            <ul>
                {statuses.map(x => <Status key={`s${x.name}`} {...x}/>)}
            </ul>
        );
    }
};