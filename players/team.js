/** team.js **/

const Player  = require('./player');

var Team = function (players , teamName) {
    this.players        = players;
    this.name           = teamName;

    this.ballsPlayed    = 0;
    this.score          = 0;
    this.wickets        = 0;

    if(players.length >= 2){
        players[0].isPlaying  = true;
        players[1].isPlaying  = true;
        this.currentPlayers   = [ players[0], players[1]  ];
    }
};

  Team.prototype.getBallResult = function() {
      var runs = this.currentPlayers[0].getBallResult();
      this.updateRuns(runs);
      this.updatePlayers(runs);
      return runs;
  };

  Team.prototype.updateRuns = function(runs){
      this.ballsPlayed++;
      (runs == "out") ? this.wickets++ : this.score += runs;
  };

  Team.prototype.updatePlayers = function(runs){
      var players = this.currentPlayers;
      if(runs == "out"){
        this.removePlayer(players[0].playerId);
      }else if(runs%2 != 0){
        this.rotateStrike();
      }
  };

  Team.prototype.rotateStrike = function () {
    this.currentPlayers[1] = [this.currentPlayers[0], this.currentPlayers[0] = this.currentPlayers[1]][0];
  };

  Team.prototype.resetTeamScores = function(){
    this.ballsPlayed    = 0;
    this.score          = 0;
    this.wickets        = 0;

    for(var i = 0; i < this.players.length; i++ ){
      this.players[i].resetPlayerScores();
    }

    if(this.players.length >= 2){
        this.players[0].isPlaying  = true;
        this.players[1].isPlaying  = true;
        this.currentPlayers        = [ this.players[0], this.players[1]  ];
    }
  };

  Team.prototype.removePlayer = function (playerId) {
    this.players[playerId-1].isOut      = true;
    this.players[playerId-1].isPlaying  = false;

    this.currentPlayers[0] = Team.getNewPlayer(this.players);

  };

  Team.getNewPlayer = function (players) {
    for(var i = 0; i < players.length; i++)
      if(!players[i].isOut && !players[i].isPlaying)
        break;
    return players[i];
  };



module.exports = Team;
