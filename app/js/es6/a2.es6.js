/* jshint unused:false */

(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#makeSquares').click(getValues);
  }

  function getValues(){
    var numbers = $('#numbers').val();
    numbers = numbers.split(',').map(n=>n.trim()).map(n=>n*n).map(n=>`<div>${n}</div>`);
    $('#output').append(numbers);
  }

})();
