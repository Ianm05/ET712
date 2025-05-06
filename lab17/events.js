const events = require('events');
const util = require('util');

const teams= function(name){
    this.name = name;  
}
// eventEmitter will inherit any teams construct
util.inherits(teams, events.EventEmitter);

const Barcelona = new teams('Barcelona');
const Milan = new teams('Milan');

// save each constructor in an array
const teamsArray = [Barcelona, Milan];

// Print each team using forEach loop
teams.arrayforrEach((t) => {
    t.on('nation', function(n) {
        console.log(`${t.name} is {n} football club!`)
Milan.emit(`nation`, 'Italian');
/*

eventEmitter.on('test', function(a) {
    console.log(a);
})

eventEmitter.emit('test', 'EVENTS in NODESJS')
*/

