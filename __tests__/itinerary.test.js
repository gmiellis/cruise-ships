/* globals describe it expect */
const Itinerary = require('../src/itinerary');

describe('constructor', () => {

  it('returns a itinerary object', () => {

    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it('checks itinerary object has a ports property', () => {

    const itinerary = new Itinerary();

    expect(itinerary).toHaveProperty('ports');
  });

});
