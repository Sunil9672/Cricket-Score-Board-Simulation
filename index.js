
var Teams       = require('./index/teams');
var Match       = require('./index/match');

var teams       = new Teams();
var match       = new Match(teams);

/* Server Implementation */

const express   = require('express')
const app       = express()
const port      = 3000

/* api urls */

app.use('/',express.static(__dirname+'/front-end'));

app.get('/Match/Start', (request, response) => {
    teams = Teams.resetTeamsScores(teams);
    match = new Match(teams);

    response.send(match);
});

app.get('/Match/getTeam', (request, response) => {
    response.send(teams);
});

app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
    console.log('server is listening on '+port)
});
