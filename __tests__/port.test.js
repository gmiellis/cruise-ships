/* globals describe it expect */
const Port = require('../src/port');

describe('constructor', () => {

  it('returns a port object', () => {

    expect(new Port('Vancouver')).toBeInstanceOf(Object);
  });

  it('checks the port object has a name', () => {

    const port = new Port();

    expect(port).toHaveProperty('name');
  });
});
