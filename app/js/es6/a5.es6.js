/* jshint unused:false */
/* global _:true */

(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#getBoxOffice').click(get);
  }

  function get() {
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=5&country=us&apikey=68g6348tm3vvndd9munakakf&callback=?';
    $.getJSON(url, output);
  }

  function output(x){
    var movieObject = x.movies;

    movieObject.forEach(x=>{
        var $outerdiv = $('<div>').addClass('posterSquare');
        var $img = $('<img>').attr('src', x.posters.thumbnail);
        var $label = $('<div>').addClass('label').text(x.title);
        $($outerdiv).append($img, $label);
        $('#output').append($outerdiv);
      });

  }

}());
