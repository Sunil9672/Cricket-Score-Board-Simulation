const MatchSimulator  = require('../match/matchSimulator');
const MatchStat       = require('../match/matchstats');

var Match = function (teams) {

  var matchstat       = new MatchStat(teams, 40, 24);
  var matchSimulator  = new MatchSimulator(matchstat);

  return matchSimulator.startMatch();

};

module.exports = Match;
