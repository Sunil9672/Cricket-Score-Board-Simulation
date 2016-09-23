/** player.js **/

var Player = function (playerId , name , probabilityDist) {
    this.playerId           = playerId;
    this.name               = name;
    this.probabilityDist    = probabilityDist;
    this.cummulativeDist    = Player.getCummulativeDist(probabilityDist);

    this.score              = 0;
    this.currentRuns        = 0;
    this.ballsPlayed        = 0;

    this.isOut              = false;
    this.isPlaying          = false;
}

Player.runsPossibilities = [0,1,2,3,4,5,6,"out"];

Player.prototype.getBallResult = function () {
    var runs = this.getRuns();
    this.updateRuns(runs);
    return runs;
}

Player.prototype.getRuns = function () {
    var cummDist = this.cummulativeDist;
    var random = Math.floor(Math.random()*100);
    for(var  i =cummDist.length-1; i >0; i--)
      if(random < cummDist[i] && random > cummDist[i-1] )
        break;
    return Player.runsPossibilities[i];
};

Player.prototype.updateRuns = function (runs) {
    if(runs == "out"){
      this.isOut = true;
      this.isPlaying = false;
    }else{
      this.score += runs;
    }
    this.currentRuns = runs;
    this.ballsPlayed++;
};

Player.prototype.resetPlayerScores = function () {
    this.score              = 0;
    this.currentRuns        = 0;
    this.ballsPlayed        = 0;

    this.isOut              = false;
    this.isPlaying          = false;
};


Player.getCummulativeDist = function(probabilityDist){
  for(var cummulativeDist = [probabilityDist[0]], i =1; i < probabilityDist.length; i++)
    cummulativeDist[i]    = probabilityDist[i] + cummulativeDist[i-1];
  return cummulativeDist;
}
module.exports = Player;
