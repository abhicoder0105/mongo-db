const assert = require("assert");
const MarioChar = require("../models/mariochar");

// describe a test

describe("finding records", function (done) {

  var char;

  beforeEach(function () {
     char = new MarioChar({
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
    }).then(done,done());
  });

  // find a record by ID
  it("Find one record by ID from database", function (done) {
    this.timeout(10000);
    MarioChar.findOne({_id: char._id}).then(function (result) {
      assert(result._id.to_string() === char._id.to_string());    
      done();
    }).then(done,done());
  });

});
