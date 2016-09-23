var expect  = require("chai").expect;

var Teams       = require('../index/teams');
var Match       = require('../index/match');

describe("Tests Match Output", function() {

    describe("Tests Team players", function() {

        var teams       = new Teams();
        it("The number of teams playing must be 2", function() {
            expect(teams).to.have.length.of.at.least(2);
        });

        it("Current batsmen must 2", function() {
            expect(teams[0].currentPlayers).to.have.length.of.at.least(2);
        });

        it("Number of players in the batting team must be atleast 4", function() {
            expect(teams[0].players).to.have.length.of.at.least(4);
        });

    });

    describe("Starts a match and checks the result", function() {

        var teams       = new Teams();
        var match       = new Match(teams);

        it("Match must end only if the required runs is 0 or if the balls gets over or if there are no more players", function() {
            if(match.matchstat.recquiredRuns > 0 ){
              if(match.matchstat.balls < match.matchstat.totalBalls){
                expect(match.matchstat.wickets).to.equal(match.matchstat.team.players.length-1);
              }else{
                expect(match.matchstat.balls).to.be.at.least(match.matchstat.totalBalls);
              }
            }else if(match.matchstat.recquiredRuns < 0 ){
              expect(match.matchstat.score).to.be.at.least(match.matchstat.target);
            }
        });

        it("The number of ballUpdates must be equal to the total balls played", function() {
            expect(match.ballUpdates).to.have.length.of.at.least(match.matchstat.balls);
        });

    });

});
