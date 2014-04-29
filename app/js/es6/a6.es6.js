/* jshint unused:false */
/* global _:true */
/*jshint camelcase:false */

(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#getMovies').click(get);
  }

  var score;

  function get() {
    score = $('#rating').val();
    var movieCount = $('#movieCount').val();

    var url = `http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=${movieCount}&country=us&apikey=68g6348tm3vvndd9munakakf&callback=?`;
    $.getJSON(url, output);
  }

  function output(rtData){
    var movieObject = rtData.movies.filter(x=>x.ratings.critics_score >= score);

    movieObject.forEach(x=>{
      var $outerdiv = $('<div>').addClass('posterSquare');
      var $img = $('<img>').attr('src', x.posters.thumbnail);
      var $label = $('<div>').addClass('label').text(x.title);
      $($outerdiv).append($img, $label);
      $('#output').append($outerdiv);
    });



  }

}());
