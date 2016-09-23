define([
    'jquery',
    'backbone',
], function($,  Backbone){

  var MatchStat = Backbone.Model.extend({
    defaults : {
      balls         : 0,
      score         : 0,
      wickets       : 0,
      players       : [],
      currentPlayer : undefined,
      recquiredRuns : 0,
      overs         : 0,
      totalOvers    : 0,
      teams         : [],
      battingTeam   : undefined,
      bowlingTeam   : undefined,
      winningTeam   : undefined,
    },
  });

  return MatchStat;
});
