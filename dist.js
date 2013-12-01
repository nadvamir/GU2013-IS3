function dchart() {
  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);
  function drawChart() {
	var data = google.visualization.arrayToDataTable(dataset);

	var options = {
	  title: title,
	  width: 800,
	  height: 500
	};

	var distchart = new google.visualization.LineChart(document.getElementById('dist_chart'));
	distchart.draw(data, options);
  }
}

var dataset = [
	['Country', 'datadatadata'],
	['LV',  660],
	['USA',  1000],
	['LT',  1030],
	['UK',  1170]	  
];

var title = 'Count per county';