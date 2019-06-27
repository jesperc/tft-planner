import React, { Component } from 'react';
import { setup, getChampions, getRoles, getOrigins } from '../misc/setup';
import Status from './Status';

export default class App extends Component {
    constructor() {
        super();
        setup();
        this.roles = getRoles();
        this.origins = getOrigins();
        this.setState({
            champions: getChampions().map(champion => ({ 
                champion, 
                selected: false 
            })),
            selected: []
        });
    }

    render() {
        return (
            <div>
                {this.renderStatus()}
                {this.renderChampions()}
            </div>
        )
    }

    renderChampions() {

    }

    renderStatus() {
        const selected = this.state.selected.slice(0);
        const origins = [];
        const roles = [];
        for (let champion of selected) {
            let items = this.origins.filter(x => champion.origins.includes(x.id));
            if (items.length > 0) {
                origins.push(items);
            }
            items = this.roles.filter(x => champion.roles.includes(x.id));
            if (items.length > 0) {
                roles.push(items);
            }
        }

        const names = origins.concat(roles).map(x => x.name);

        const groupBy = function(xs, key) {
            return xs.reduce((rv, x) => {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        };
          
        const statuses = [];
        const grouping = groupBy(names, 'length');
        const keys = Object.keys(grouping);
        for (let key of keys) {
            const names = grouping[key];
            for (let name of names) {
                statuses.push({ count: key, name, interval: [2, 4, 6]});
            }
        }

        const list = statuses.map(item => (
            <li>hej</li>
        ));

        return (
            <ul>
                {list}
            </ul>
        );
    }
};