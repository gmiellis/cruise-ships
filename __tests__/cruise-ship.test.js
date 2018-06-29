/* globals describe it expect */
const Ship = require('../src/cruise-ship');

describe('constructor', () => {

  it('returns an object', () => {

    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('has a starting point', () => {

    const ship = new Ship('Vancouver');

    expect(ship.startingPoint).toBe('Vancouver');
  });
});
