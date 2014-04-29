/* jshint unused:false */
/* global _:true */
/* global AmCharts:true */
/*jshint camelcase:false */

(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    makeChart();
    $('#compare').click(get);
  }

  var chart;

  function get() {
    var movieCount = $('#movieCount').val();

    var url = `http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=${movieCount}&country=us&apikey=68g6348tm3vvndd9munakakf&callback=?`;
    $.getJSON(url, output);
  }

  function output(rtData){

    var movieObject = rtData.movies;

    movieObject.forEach(x=>{
      chart.dataProvider.push({
        title: x.title,
        audScore: x.ratings.audience_score,
        criticScore: x.ratings.critics_score
      });
    });

    console.log(chart.dataProvider);
    chart.validateData();
  }


  function makeChart(){
    chart = AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'theme': 'light',
      'pathToImages': 'http://www.amcharts.com/lib/3/images/',
      'dataProvider': [],
      'valueAxes': [{
        'axisAlpha': 0.2,
        'dashLength': 1,
        'position': 'left'
      }],
      'graphs': [{
        'id':'g1',
        'balloonText': 'Critics\' Score<br />[[value]]',
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor':'#FFFFFF',
        'hideBulletsCount': 50,
        'title': 'Critics\' Score',
        'valueField': 'criticScore',
        'useLineColorForBulletBorder':true
      },
      {
        'id':'g2',
        'balloonText': 'Audience Score<br />[[value]]',
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor':'#FFFFFF',
        'hideBulletsCount': 50,
        'title': 'Audience Score',
        'valueField': 'audScore',
        'useLineColorForBulletBorder':true
      }],
      'chartScrollbar': {
        'autoGridCount': true,
        'graph': 'g1',
        'scrollbarHeight': 40
      },
      'chartCursor': {
          'cursorPosition': 'mouse'
        },
        'categoryField': 'date',
        'categoryAxis': {
            'parseDates': true,
            'axisColor': '#DADADA',
            'dashLength': 1,
            'minorGridEnabled': true
          },
          'exportConfig':{
            menuRight: '20px',
            menuBottom: '30px',
            menuItems: [{
              icon: 'http://www.amcharts.com/lib/3/images/export.png',
              format: 'png'
            }]
          }
        });

    chart.addListener('rendered', zoomChart);
    zoomChart();
  }

// this method is called when chart is first inited as we listen for 'dataUpdated' event
  function zoomChart() {
      // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
      chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);

    }

}());
