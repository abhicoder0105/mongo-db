const mongoose = require("mongoose");

// ES^ promise
mongoose.promise = global.promise;

//connect to mongoDB
before(function(done) {
  mongoose.connect("mongodb://localhost/mongodb");

  mongoose.connection
    .once("open", function () {
      console.log("connection has been made..");
      done();
    })
    .on("error", function (error) {
      console.log("Connection error:", error);
    });
  });

  // Drop the characters before each test
  beforeEach(function (done) {
    // Drop the collection  
    mongoose.connection.collections.mariochars.drop(function (){
      done();
    });
  }) 
