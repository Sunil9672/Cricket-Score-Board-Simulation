Match Simulator
---------------

This is a problem to simulate a cricket match with 4 players, in the last 4 overs.

Every batsman has the following probability,

![Alt text](/screenshots/ProbabilityOfPlayers.jpg?raw=true)

Back End :
---------

The sample scoreboard output goes something like this,

![Alt text](/screenshots/SampleOutput.jpg?raw=true)

It is implemented in the back end using nodejs.

The tests was written using mocha.

Front End :
-----------

The front end is also implemented for this problem, and it looks something like this,

![Alt text](/screenshots/FrontEnd.jpg?raw=true)

it can be viewed here,

https://limitless-fortress-23160.herokuapp.com/

The front end is developed using BackBonejs, bootstrap, js, jquery, css.


How to run :
------------
Go to the root of the directory.

Start the server          : npm start;          (or) node index.js;
Run tests                 : npm test;           (or) mocha test/matchOutput.js;
Front End Implementation  : http://localhost:3000/ (in browser)

Refer package.json
and more info on building tests, dependencies and other scripts available.

Code Flow :
----------
A new set of teams are created in teams.js
A new match is simulated using the teams in MatchSimulator.js

matchstat is a model that is maintained throughout a match


Update :
-------

This code cleared the evaluation with a score of 4.2/5.

![Alt text](/screenshots/GeektrustScore.jpg?raw=true)

Also received a lot of badges :)
