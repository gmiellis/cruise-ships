/* globals describe it expect */
const Ship = require('../src/cruise-ship');

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
      const stormy = Object.create(global.Math);
      global.Math = stormy;
      stormy.random = () => 0.1;
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(van.removeShip).toHaveBeenCalledWith(ship);
    });
    it('get added to port on instantiation', () => {

      expect(van.addShip).toHaveBeenCalledWith(ship);
    });
    it('docks at a port', () => {
      const stormy = Object.create(global.Math);
      global.Math = stormy;
      stormy.random = () => 0.3;
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(sf);
      expect(sf.addShip).toHaveBeenCalledWith(ship);
    });
    it('it cant sail further than its itinerary', () => {
      const stormy = Object.create(global.Math);
      global.Math = stormy;
      stormy.random = () => 0.2;
      ship.setSail();
      ship.dock();
      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
    it('cant set sail in stormy weather', () => {
      const stormy = Object.create(global.Math);
      global.Math = stormy;
      stormy.random = () => 0.41;
      expect(() => ship.setSail()).toThrowError('ITS TOO STORMY!!!!!');
    });
  });
});
