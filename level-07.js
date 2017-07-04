class Player {
  constructor() {
    this._prevHealth = null;
    this._rescued = false;
  }

  playTurn(warrior) {
    const goodHealth = warrior.health() > 15;
    const healthDanger = warrior.health() < 10;
    const freeWay = warrior.feel().isEmpty();
    const takingDamage = this._prevHealth > warrior.health();
    if (freeWay) {
      if (takingDamage && healthDanger) {
        warrior.walk('backward');
      } else if (!goodHealth && !takingDamage) {
        warrior.rest();
      } else {
        warrior.walk();
      }
    } else if (warrior.feel().isWall()) {
      warrior.pivot();
    } else if (warrior.feel().isCaptive()) {
      warrior.rescue();
    } else {
      warrior.attack();
    }
    this._prevHealth = warrior.health();
  }
}
