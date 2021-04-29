const urban = require('../urban.js');
const test = require('ava');

test('Fetching random urban definition', t => urban.random()
    .then(d => t.truthy(d))
    .catch(e => t.truthy(e)));

test('Fetching \'hello\' urban definition', t => urban('hello')
    .then(d => t.truthy(d))
    .catch(e => t.truthy(e)));

test('Fetching \'fsiojgjsgjsgihsghghjsh\' urban definition (success if not found)', t => urban('fsiojgjsgjsgihsghghjsh')
    .then(d => t.falsy(d))
    .catch(e => t.truthy(e)));

test('Fetching random specific urban definition', t => urban.random('hello')
    .then(d => t.truthy(d))
    .catch(e => t.truthy(e)));

test('Fetching all specific urban definitions', t => urban.all('hello')
    .then(d => t.true(typeof d == 'object'))
    .catch(e => t.truthy(e)));
