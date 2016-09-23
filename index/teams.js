const Player    = require('../players/player');
const Team      = require('../players/team'  );

var Teams = function () {

    var players   = [];
    players.push( new Player( 1 , "Kirat Boli"   , [5,30,25,10,15,1,9,5]  ));
    players.push( new Player( 2 , "N.S Nodhi"    , [10,40,20,5,10,1,4,10] ));
    players.push( new Player( 3 , "R Rumrah"     , [20,30,15,5,5,1,4,20]  ));
    players.push( new Player( 4 , "Shashi Henra" , [30,25,5,0,5,1,4,30]   ));

    var teams      = [];
    teams.push( new Team( players, "Lengaburu") );
    teams.push( new Team( {},      "Enchai"   ) );

    return teams;
};

Teams.resetTeamsScores = function(teams){
    for(var i=0 ; i < teams.length; i++){
      teams[i].resetTeamScores();
    }
    return teams;
};

module.exports = Teams;
