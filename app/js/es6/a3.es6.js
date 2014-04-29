/* jshint unused:false */
/* global moment:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#format').click(getDays);
  }

  function getDays(){
    var date = $('#date').val();
    var diff = moment(date).fromNow();
    $('#output').append(diff);

  }

})();
