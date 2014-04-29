/* jshint unused:false */
/* global _:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#makeArray').click(getValues);
  }

  function getValues() {
    var values = $('#numbers').val().split(',').map(n=>n.trim());
    console.log(values);
    var genArray = _.range(values[0], values[1], values[2]);
    console.log(genArray);
    var _genArray = _(genArray).map(x=>Math.pow(x,3)).map(x=>`<div>${x}</div>`);
    $('#output').append(_genArray.value());
  }
})();
