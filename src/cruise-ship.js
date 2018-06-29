function Ship(startingPoint) {

  this.startingPoint = startingPoint;

}

Ship.prototype.setSail = function () {

  this.startingPoint = '';

};

module.exports = Ship;
