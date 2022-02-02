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
 

  // find a record by ID
  it("Removing one record by ID from database", function (done) {
    this.timeout(10000);
    MarioChar.findOneAndRemove({name: "mario"}).then(function (){      
    MarioChar.findOne({name: "mario"}).then(function (result) {
      assert(result === null);    
      done();
    })
    })
    
  });

});
