function distSelect() {
	var mylist = document.getElementById("distList");
	var title = mylist.options[mylist.selectedIndex].text;
	google.load("visualization", "1", {packages:["corechart"], "callback" : drawChart});
	function drawChart() {
		var data = google.visualization.arrayToDataTable(dataset[mylist.options[mylist.selectedIndex].value]);
		var options = {
			title: title,
			//curveType: "function",
			width: 0,
			height: 440
		};
		var distchart = new google.visualization.ScatterChart(document.getElementById('dist_chart'));
		distchart.draw(data, options);
	};
};

var dataset = [
	[['Range', 'Countries'],
	['1 - 2 billions',  65],
	['2 - 3 billions',  26],
	['3 - 4 billions',  14],
	['4 - 5 billions',  5],
	['5 - 6 billions',  9],
	['6 - 7 billions',  8],
	['7 - 8 billions',  4],
	['8 - 9 billions',  2],
	['9 - 10 billions',  0],
	['10+ billions',  64]],

	[	['Range', 'Countries'],
		['1',  660],
		['2',  1000],
		['3',  1030],
		['4',  1170],
		['5',  1500],
		['6',  1300],
		['7',  1030],
		['8',  850],
		['9',  730],
		['10',  600]]
	];
