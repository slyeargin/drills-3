/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#makeString').click(getValues);
  }

  function getValues() {
    var firstName = $('#first').val().toLowerCase();
    var lastName = $('#last').val().toLowerCase();
    var favorite = $('#movie').val().toUpperCase();

    var output = `${firstName} ${lastName} loves ${favorite}.`;
    $('#output').text(output);

  }

})();
