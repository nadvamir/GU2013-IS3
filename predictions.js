prediction();

function prediction(){
    google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Actual', 'Predicted'],
          ['Great Britain',  45,      23],
          ['China',  60,      70],
          ['United States',  62,       71],
          ['France',  30,       22],
          ['Italy',  11,       15],
          ['Germany',  10,       21],
          ['Canada',  42,       50],
          ['Sweden',  22,       21],
          ['Russia',  37,      42]
        ]);

        var options = {
          title: 'Medal Predictions',
          hAxis: {title: 'Country', titleTextStyle: {color: 'gray'}},
          vAxis: {title: 'Number of Medals', titleTextStyle: {color: 'gray'}}    
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
}