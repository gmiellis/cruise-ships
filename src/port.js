/* globals window */
(function exportPort() {
  function Port(name) {
    this.name = name;
    this.ships = [];
  }

  Port.prototype = {
    addShip(ship) {
      this.ships.push(ship);
    },
    removeShip(ship) {
      const ships = this.ships;
      const remove = ships.indexOf(ship);
      this.ships.splice(remove, 1);
    },
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());
