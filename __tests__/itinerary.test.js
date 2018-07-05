/* globals describe it expect */
const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('itinerary an properties', () => {
  let van;
  let sf;
  let itinerary;

  beforeEach(() => {
    van = new Port('Vancouver');
    sf = new Port('San Francisco');
    itinerary = new Itinerary([van, sf]);
  });

  it('itinerary can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it('itinerary object has a ports property', () => {
    expect(itinerary).toHaveProperty('ports');
  });
  it('can have ports', () => {
    expect(itinerary.ports).toEqual([van, sf]);
  });
});
