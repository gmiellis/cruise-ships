function CruiseShip(name) {

  this.name = name;
  this.passengerCapacity = 100;
  this.currentPassengers = 0;
  this.maxKnots = 0;
  this.homePort = 'Liverpool';

}

CruiseShip.prototype.embark = function (number) {
  
  this.currentPassengers += (number);

}

CruiseShip.prototype.debark = function (number) {
  
    this.currentPassengers -= (number);
  
}

CruiseShip.prototype.plank = function (number) {
  
    this.currentPassengers -= (number);
  
}

module.exports = CruiseShip;
