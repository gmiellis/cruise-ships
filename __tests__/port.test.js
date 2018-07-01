/* globals describe it expect */
const Port = require('../src/port');

describe('constructor', () => {

  it('returns a port object', () => {

    expect(new Port('Vancouver')).toBeInstanceOf(Object);
  });

  it('checks the port object has a name property', () => {

    const port = new Port();

    expect(port).toHaveProperty('name');
  });

  it('checks the port object has a ships property', () => {

    const port = new Port();

    expect(port).toHaveProperty('ships');
  });
});

describe('methods', () => {

  it('adds a ship to the ship property', () => {

    const port = new Port('Vancouver');
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });

  it('removes a ship from the ship property', () => {

    const port = new Port('Vancouver');
    const titanic = {};
    const qe2 = {};

    port.addShip(titanic);
    port.addShip(qe2);
    port.removeShip(qe2);

    expect(port.ships).toEqual([titanic]);
  });
});
