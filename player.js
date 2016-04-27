
exports = module.exports = {

  VERSION: 'Superstar poker js-player',

  checkCoppia: function (a, b) {
        return a == b;
    },


  bet: function (gamestate) {
        //Questo sono io
       var player= gamestate.players[gamestate.me];
        var call = gamestate.callAmount
    //
    // gamestate contains info about the state of the game.
    // check the documentation at https://bot-poker.herokuapp.com/wiki#gamestate for further info about the data structure.

    //
    // you just have to return the amount that you want to bet.
      if (this.checkCoppia(gamestate.players[me].cards[0].rank, gamestate.players[me].cards[1].rank)) {
        return call *2;
      }


    // enjoy the game!

    //
    // currently we just fold every single hand.

    'use strict';

    console.log(`Currently playing tournament ${gamestate.tournamentId}`);

    return 0;

  }

};
