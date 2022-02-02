const assert = require("assert");
const MarioChar = require("../models/mariochar");

// describe a test

describe("finding records", function (done) {
  beforeEach(function () {
    var char = new MarioChar({
      name: "mario",
      weight: 10,
    });

    char.save().then(function () {
      assert(char.isNew === false);
      done();
    });
  });

  // create a test
  it("Find one record from database", function (done) {
    this.timeout(10000);
    MarioChar.findOne({name: "mario"}).then(function (result) {
      assert(result.name === "mario");    
      done();
    });
  });
});
