/* globals describe it expect */
const Ship = require('../src/cruise-ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('constructor', () => {

  it('returns an object', () => {

    const port = new Port('Vancouver');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {

    const port = new Port('Vancouver');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });
});

describe('set sail', () => {

  it('it can set sail', () => {

    const van = new Port('Vancouver');
    const sf = new Port('San Francisco');
    const itinerary = new Itinerary([van, sf]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(van.ships).not.toContain(ship);
  });

  it('it cant sail further than its itinerary', () => {

    const van = new Port('Vancouver');
    const sf = new Port('San Francisco');
    const itinerary = new Itinerary([van, sf]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
});

describe('dock', () => {

  it('docks at port', () => {

    const van = new Port('Vancouver');
    const sf = new Port('San Francisco');
    const itinerary = new Itinerary([van, sf]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(sf);
    expect(sf.ships).toContain(ship);
  });

  it('gets added to port on instantiation', () => {

    const port = new Port('Vancouver');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(port.ships).toContain(ship);
  });
});
