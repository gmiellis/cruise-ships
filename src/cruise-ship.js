/* globals window */
(function exportShip() {
  function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  Ship.prototype = {
    setSail() {
      const itinerary = this.itinerary;
      const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

      if (currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error('End of itinerary reached');
      }

      const weather = Math.random();
      if (weather >= 0.4) {
        throw new Error('ITS TOO STORMY!!!!!');
      }

      this.currentPort = itinerary.ports[currentPortIndex];
      this.currentPort.removeShip(this);
      this.previousPort = this.currentPort;
      this.currentPort = null;
    },
    dock() {
      const itinerary = this.itinerary;
      const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      this.currentPort = itinerary.ports[previousPortIndex + 1];
      this.currentPort.addShip(this);
    },
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
}());
