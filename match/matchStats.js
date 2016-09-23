/** matchstat.js **/

var MatchStat = function (teams , target , totalBalls) {

    this.team            = teams[0],
    this.recquiredRuns   = target,
    this.totalBalls      = totalBalls,
    this.target          = target,

    this.balls            = 0,
    this.score            = 0,
    this.wickets          = 0,

    this.currentPlayer    = undefined,
    this.currentRuns      = 0,

    this.battingTeam      = teams[0];
    this.bowlingTeam      = teams[1];
}

MatchStat.prototype.updateRuns = function (currentPlayerId,runs) {
    if(runs == "out"){
      this.wickets++;
    }else{
      this.score += runs;
      this.recquiredRuns -= runs;
    }
    this.balls++;

    this.currentPlayer = this.team.players[currentPlayerId-1];
    this.currentRuns   = runs;
};

module.exports = MatchStat;
