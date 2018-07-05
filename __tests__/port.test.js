/* globals describe it expect */
const Port = require('../src/port');

describe('port an port register', () => {
  let port;
  let ship;
  let titanic;
  let qe2;

  beforeEach(() => {
    port = new Port('Vancouver');
    ship = {};
    titanic = {};
    qe2 = {};
  });

  it('port can be instantiated', () => {
    expect(new Port('Vancouver')).toBeInstanceOf(Object);
  });
  it('port object has a name propert', () => {
    expect(port).toHaveProperty('name');
  });
  it('port object has a ships property', () => {
    expect(port).toHaveProperty('ships');
  });
  it('adds a ship to the ship property', () => {
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
  it('remove a ship from ship property', () => {
    port.addShip(titanic);
    port.addShip(qe2);
    port.removeShip(qe2);
    expect(port.ships).toEqual([titanic]);
  });
});
