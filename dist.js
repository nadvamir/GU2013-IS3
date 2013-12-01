function select() {
	console.log(1);
	var mylist = document.getElementById("distList");
	var title = mylist.options[mylist.selectedIndex].text;
	var dataset = [
		['Range', 'Countries'],
		['1',  660],
		['2',  1000],
		['3',  1030],
		['4',  1170],
		['5',  1500],
		['6',  1300],
		['7',  1030],
		['8',  850],
		['9',  730],
		['10',  600]
	];
	console.log(2);
	google.load("visualization", "1", {packages:["corechart"], "callback" : drawChart});
	function drawChart() {
		console.log(3);
		var data = google.visualization.arrayToDataTable(dataset);
		var options = {
			title: title,
			curveType: "function",
			width: 0,
			height: 440
		};

		var distchart = new google.visualization.LineChart(document.getElementById('dist_chart'));
		distchart.draw(data, options);
	};
	console.log(4);
};


