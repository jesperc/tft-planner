export default class Champion {
    constructor(champion) {
        this.id = champion.id;
        this.name = champion.name;
        this.origins = champion.origins;
        this.roles = champion.roles;
        this.tier = champion.tier;
    }
}