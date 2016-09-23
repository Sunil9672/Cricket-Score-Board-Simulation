var expect  = require("chai").expect;

var Player  = require('../players/player');
var Team    = require('../players/team');

describe("Tests Players Methods", function() {

    describe("Player runs in each ball", function() {

        var probabilityDist = [5,30,25,10,15,1,9,5];
        var player          = new Player( 1 , "Kirat Boli"   ,  probabilityDist );
        var runsFor100Balls = [];

        it("Cummulative distribution length must be equal to probability distribution length", function() {
            expect(player.cummulativeDist.length).to.equal(player.probabilityDist.length);
        });

        it("Cummulative distribution of the last element must be 100", function() {
            var endingValue = player.cummulativeDist[player.cummulativeDist.length-1];
            expect(endingValue).to.equal(100);
        });

        it("Get a sample distribution", function() {
            for(var i = 0; i < 100; i++)
              runsFor100Balls.push(player.getBallResult());

            var runsPossibilities = [0, 1,  2,  3,  4,  5,  6,  "out"];

            function getSampleDistribution(runsFor100Balls, runs) {
                var noOfOccurences = 0;
                for(var i = 0; i< runsFor100Balls.length; i++)
                  if(runsFor100Balls[i]==runs)
                    noOfOccurences++;
                return noOfOccurences;
            }

            var runsProbability = [];
            for(var i =0; i < runsPossibilities.length; i++){
                var sampleDistribution = getSampleDistribution(runsFor100Balls,runsPossibilities[i])
                runsProbability.push(sampleDistribution);
            }
        });

        it("The score of the player must be the sum of the runs", function() {
            var totalRuns = 0;
            for(var i =0; i < runsFor100Balls.length; i++)
                totalRuns += runsFor100Balls[i] != "out" ? runsFor100Balls[i] : 0;
            expect(player.score).to.equal(totalRuns);
        });

    });
});
