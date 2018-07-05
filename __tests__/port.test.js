/* globals describe it expect */
const Port = require('../src/port');

describe('port an port register', () => {
  let port;

  beforeEach(() => {
    port = new Port('Vancouver');
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
    const ship = jest.fn();
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
  it('remove a ship from ship property', () => {
    const titanic = jest.fn();
    const qe2 = jest.fn();
    port.addShip(titanic);
    port.addShip(qe2);
    port.removeShip(qe2);
    expect(port.ships).toEqual([titanic]);
  });
});
