const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// describe a test

describe('Saving records', function () {

  // create a test
  it('Save a record to database', function(done){
   var char = new MarioChar({
     name: 'mario'
   });

   char.save().then(function(){
     assert(char.isNew === false);
     done();
   })
  })


})