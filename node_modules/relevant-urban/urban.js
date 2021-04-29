const snekfetch = require('snekfetch');
const { BASE_URL, DEFINITION, randomArrayItem } = require('./Constants');

class Urban {
    static first(query) {
        return this.search(query)
        .then(body => new DEFINITION(body.list[0], body));
    }
    
    static random(query = null) {
        if (!query) return this.getRandom(query)
        .then(body => new DEFINITION(body.list[0], body));
        else return this.search(query)
        .then(body => new DEFINITION(randomArrayItem(body.list), body));
    }
    
    static all(query) {
        return this.search(query)
        .then(body => body.list.map(d => new DEFINITION(d, body)));
    }
    
    static search(query, page = 1) {
        return new snekfetch('GET', `${BASE_URL}/define?page=${page}&term=${query}`)
        .then(res => res.body && res.body.result_type != 'no_results' ? res.body : Promise.reject(TypeError('No results')));
    }
    
    static getRandom() {
        return new snekfetch('GET', `${BASE_URL}/random`)
        .then(res => res.body && res.body.result_type != 'no_results' ? res.body : Promise.reject(TypeError('No results')));
    }
    
    static get version() {
        return require('./package.json').version;
    }

}

module.exports = Object.assign(Urban.first.bind(Urban), {
    search: Urban.search,
    definition: DEFINITION,
    all: Urban.all.bind(Urban),
    random: Urban.random.bind(Urban),
    version: Urban.version });