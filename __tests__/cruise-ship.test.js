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
    expect(cShip.passengerCapacity).toEqual(100);
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
    expect(cShip.homePort).toEqual('');
  });

});

describe('embarkation', () => {

  it('increases current passengers', () => {
    const cShip = new CruiseShip('Horizon Chaser');
    cShip.embark(50);
    expect(cShip.currentPassengers).toEqual(50);
  });

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
