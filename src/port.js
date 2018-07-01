function Port(name) {

  this.name = name;
  this.ships = [];

}

Port.prototype.addShip = function (ship) {

  this.ships.push(ship);

};

Port.prototype.removeShip = function (ship) {

  const ships = this.ships;
  const remove = ships.indexOf(ship);

  this.ships.splice(remove, 1);

};

module.exports = Port;
