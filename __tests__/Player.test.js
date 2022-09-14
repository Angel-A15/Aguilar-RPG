const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(NUmber));
    expect(player.strength).toEqual(expect.any(Number));
    ecpect(player.agility).toEqual(expect.any(Number));

});