(function(root) { "use strict";

  var _ = root._;
  var errors = root.Substance.errors;
  var assert = root.Substance.assert;
  var SurfaceTest = root.Substance.Surface.AbstractTest;
  var registerTest = root.Substance.Test.registerTest;



  // Some example paragraphs
  // --------
  // 

  var P1 = "The quick brown fox jumps over the lazy dog.";
  var P2 = "Pack my box with five dozen liquor jugs";
  var P3 = "Fix problem quickly with galvanized jets";
  var P4 = "Heavy boxes perform quick waltzes and jigs";

  var BasicEditing = function() {
    SurfaceTest.call(this);

    // deactivate the default fixture
    // for testing basic behavior
    this.fixture = function() {};
    
    // this.setDelay(25);

    this.actions = [

      "Insert some text", function() {
        console.log('inserting some text');
        this.insertContent(P1);
      },

      "Insert some more text", function() {
        this.insertContent("");
        this.insertContent(P3);
      },

      // "Make a selection", function() {
      //   this.document.select({
      //     start: [0, 5],
      //     end: [1, 10],
      //   });
      // },

      // "Delete selection", function() {
      //   this.document.delete();
      // },

      "Set single cursor", function() {
        this.document.select({
          start: [1,2],
          end: [1,2]
        });
      }
    ];
  };


  BasicEditing.prototype = SurfaceTest.prototype;


  registerTest(['Surface', 'Basic Editing'], new BasicEditing());

})(this);
