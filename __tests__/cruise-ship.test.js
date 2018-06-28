/* globals describe it expect */
const CruiseShip = require('../src/cruise-ship');

describe('constructor', () => {

  it('returns an object', () => {

    expect(new CruiseShip('Horizon Chaser')).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {

    const cShip = new CruiseShip('Horizon Chaser');

    expect(cShip.name).toEqual('Horizon Chaser');
  });

  it('has initial passenger capacity of 0', () => {

    const cShip = new CruiseShip('Horizon Chaser');

    expect(cShip.passengerCapacity).toEqual(0);
  });

  it('has initial passenger capacity of 0', () => {

    const cShip = new CruiseShip('Horizon Chaser');

    expect(cShip.currentPassengers).toEqual(0);
  });

  it('has initial max knots value of 0', () => {

    const cShip = new CruiseShip('Horizon Chaser');

    expect(cShip.maxKnots).toEqual(0);
  });

  it('has initial home port set to empty string', () => {

    const cShip = new CruiseShip('Horizon Chaser');

    expect(cShip.homePort).toBe('');
  });

});

describe('new ship stats', () => {

  it('sets capacity & max knots of new ship', () => {

    const cShip = new CruiseShip('Horizon Chaser');
    cShip.sStats(100, 20, 'Liverpool');

    expect(cShip.passengerCapacity).toEqual(100);
    expect(cShip.maxKnots).toEqual(20);
    expect(cShip.homePort).toEqual('Liverpool');
  });

});

describe('embarkation', () => {

  it('increases current passengers', () => {

    const cShip = new CruiseShip('Horizon Chaser');
    cShip.embark(50);

    expect(cShip.currentPassengers).toEqual(50);
  });

  // it('alerts if no more capacity', () => {

    // const cShip = new CruiseShip('Horizon Chaser');
    // cShip.sStats(200, 22, 'Vancouver');
    // cShip.embark(175);

    // expect(cShip.embark(30)).toThrow('NO CAPACITY AVAILABLE');
  // });

});

describe('debarkation', () => {

  it('decreases current passengers', () => {

    const cShip = new CruiseShip('Horizon Chaser');
    cShip.embark(77);
    cShip.debark(50);

    expect(cShip.currentPassengers).toEqual(27);
  });

});

describe('walk the plank', () => {

  it('decreases current passengers', () => {

    const cShip = new CruiseShip('Horizon Chaser');
    cShip.embark(77);
    cShip.plank(7);

    expect(cShip.currentPassengers).toEqual(70);
  });
});

describe('ship sets sail', () => {

  it('it marks the home port as blank', () => {

    const cShip = new CruiseShip('Horizon Chaser');
    cShip.sStats(200, 22, 'Liverpool')
    cShip.embark(77);
    cShip.setSail();

    expect(cShip.homePort).toBeFalsy();
  });

});
