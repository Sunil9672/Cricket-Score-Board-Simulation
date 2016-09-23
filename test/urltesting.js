var expect  = require("chai").expect;
var request = require("request");
var assert = require("assert");


describe("Match Players API", function() {

  describe("Tests all the api urls", function() {
    var url = "http://localhost:3000/Match/getTeam/";

    it("Match/getTeam/ request returns status 200", function() {
      request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
      });
    });

    url = "http://localhost:3000/Match/Start/";

    it("Match/Start/ request returns status 200", function() {
      request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
      });
    });

  });

});
