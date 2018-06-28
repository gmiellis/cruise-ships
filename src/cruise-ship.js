function CruiseShip(name) {

  this.name = name;
  this.passengerCapacity = 0;
  this.currentPassengers = 0;
  this.maxKnots = 0;
  this.homePort = '';

}

CruiseShip.prototype.sStats = function (pCapacity, mxKnots, hPort) {

  this.passengerCapacity += (pCapacity);
  this.maxKnots += (mxKnots);
  this.homePort = (hPort);

};


CruiseShip.prototype.embark = function (number) {

  // if ((this.passengerCapacity + (number)) <= this.passengerCapacity) {
    // throw new Error('NO CAPACITY AVAILABLE');
  // } else {
    this.currentPassengers += number;
  // }

};

CruiseShip.prototype.debark = function (number) {

  this.currentPassengers -= (number);

};

CruiseShip.prototype.plank = function (number) {

  this.currentPassengers -= (number);

};

CruiseShip.prototype.setSail = function () {

  this.homePort = '';

};

module.exports = CruiseShip;
