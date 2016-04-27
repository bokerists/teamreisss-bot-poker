'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var player = function () {
  function player() {
    _classCallCheck(this, player);
  }

  _createClass(player, [{
    key: 'Constructor',
    value: function Constructor() {
      this.VERSION = 'Superstar poker js-player';
    }
  }, {
    key: 'checkCoppia',
    value: function checkCoppia(a, b) {
      return a.rank === b.rank;
    }
  }, {
    key: 'checkStessoColore',
    value: function checkStessoColore(a, b) {
      return a.type === b.type;
    }
  }, {
    key: 'checkFigura',
    value: function checkFigura(a) {
      return a.rank.charCodeAt(0) > 10;
    }
  }, {
    key: 'checkFigure',
    value: function checkFigure() {
      return checkFigura(a) && checkFigura(b);
    }
  }, {
    key: 'bet',
    value: function bet(gamestate) {
      /*let {callAmount,
        players[gamestate.me]: player,
        [gamestate.players[gamestate.me].cards[0]] : primaCarta,
        [gamestate.players[gamestate.me].cards[1]] : secondaCarta
      } = gamestate;*/

      var player = gamestate.players[gamestate.me];
      var callAmount = gamestate.callAmount;
      var primaCarta = player.cards[0];
      var secondaCarta = player.cards[1];

      if (this.checkCoppia(primaCarta, secondaCarta) && this.checkFigure(primaCarta, secondaCarta)) {
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

      console.log('Currently playing tournament ' + gamestate.tournamentId);
      return 0;
    }
  }]);

  return player;
}();

exports.default = player;
