class Player {
  constructor() {
    this._prevHealth = null;
  }

  playTurn(warrior) {
    const goodHealth = warrior.health() > 15;
    const freeWay = warrior.feel().isEmpty();
    const takingDamage = this._prevHealth > warrior.health();
    if (freeWay) {
      if (!goodHealth && !takingDamage) {
        warrior.rest();
      } else {
        warrior.walk();
      }
    } else {
      warrior.attack();
    }
    this._prevHealth = warrior.health();
  }
}
