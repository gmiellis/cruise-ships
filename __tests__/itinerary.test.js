/* globals describe it expect */
const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('constructor', () => {

  it('returns a itinerary object', () => {

    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it('checks itinerary object has a ports property', () => {

    const itinerary = new Itinerary();

    expect(itinerary).toHaveProperty('ports');
  });
});

describe('object -', () => {

  it('can have ports', () => {

    const van = new Port('Vancouver');
    const sf = new Port('San Francisco');

    const itinerary = new Itinerary([van, sf]);

    expect(itinerary.ports).toEqual([van, sf]);
  });
});
