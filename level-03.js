class Player {
  playTurn(warrior) {
    const goodHealth = warrior.health() > 3;
    const freeWay = warrior.feel().isEmpty();
    if (freeWay) {
      if (goodHealth) {
        warrior.walk();
      } else {
        warrior.rest();
      }
    } else if (goodHealth) {
      warrior.attack();
    } else {
      warrior.walk('backward');
    }
  }
}
