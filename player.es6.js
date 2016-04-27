export default class player {

  Constructor() {
    this.VERSION = 'Superstar poker js-player';
  }

  checkCoppia(a, b) {
    return a.rank === b.rank;
  }

  checkStessoColore(a, b) {
    return a.type === b.type;
  }

  checkFigura(a) {
    return a.rank.charCodeAt(0) > 10;
  }

  checkFigure() {
    return checkFigura(a) && checkFigura(b);
  }

  bet(gamestate) {
      /*let {callAmount,
        players[gamestate.me]: player,
        [gamestate.players[gamestate.me].cards[0]] : primaCarta,
        [gamestate.players[gamestate.me].cards[1]] : secondaCarta
      } = gamestate;*/

      let player = gamestate.players[gamestate.me];
      let callAmount = gamestate.callAmount;
      let primaCarta = player.cards[0];
      let secondaCarta = player.cards[1];

      if (this.checkCoppia(primaCarta, secondaCarta)
          && this.checkFigure(primaCarta, secondaCarta)) {
        return callAmount * 4;
      }

      if (this.checkFigure(primaCarta, secondaCarta)) {
        return callAmount * 3;
      }

      if (this.checkCoppia(primaCarta, secondaCarta) || this.checkStessoColore(primaCarta, secondaCarta)) {
        return callAmount * 2;
      }

      if (this.checkFigura(primaCarta) || this.checkFigura(secondaCarta)) {
        return callAmount;
      }

      console.log(`Currently playing tournament ${gamestate.tournamentId}`);
      return 0;
  }
}
