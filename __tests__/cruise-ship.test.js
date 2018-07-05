/* globals describe it expect */
const Ship = require('../src/cruise-ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('ship', () => {
  describe('with ports and an itinerary', () => {
    let van;
    let sf;
    let itinerary;
    let ship;

    beforeEach(() => {
      const port = {
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      van = {
        ...port,
        name: 'Vancouver',
        ships: [],
      };
      sf = {
        ...port,
        name: 'San Francisco',
        ships: [],
      };
      itinerary = {
        ports: [van, sf],
      };
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
      expect(van.removeShip).toHaveBeenCalledWith(ship);
    });
    it('get added to port on instantiation', () => {

      expect(van.addShip).toHaveBeenCalledWith(ship);
    });
    it('docks at a port', () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(sf);
      expect(sf.addShip).toHaveBeenCalledWith(ship);
    });
    it('it cant sail further than its itinerary', () => {
      ship.setSail();
      ship.dock();
      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
  });
});
