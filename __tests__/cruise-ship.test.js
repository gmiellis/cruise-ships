/* globals describe it expect */
const Ship = require('../src/cruise-ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('ship', () => {
  describe('with ports and an itinerary', () => {
    let ship;
    let van;
    let sf;
    let itinerary;

    beforeEach(() => {
      van = new Port('Vancouver');
      sf = new Port('San Francisco');
      itinerary = new Itinerary([van, sf]);
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it('has a starting point', () => {
      expect(ship.currentPort).toBe(van);
    });
    it('can set sail', () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
    });
    it('get added to port on instantiation', () => {
      expect(van.ships).toContain(ship);
    });
    it('docks at a port', () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(sf);
      expect(sf.ships).toContain(ship);
    });
    it('it cant sail further than its itinerary', () => {
      ship.setSail();
      ship.dock();
      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
  });
});
