function genstats(){
    var geomapOption = document.getElementById("options");

    google.load("visualization", "1", {packages:["geochart"], "callback" : drawGeoChart});

    function drawGeoChart() {
        var data = google.visualization.arrayToDataTable(medalData);
        var regions = [ 'world', '002', '142', '150', '021', '005', '013', '029', '009' ];
        var continent = geomapOption.options[geomapOption.selectedIndex].value
        var regionSelect = regions[continent];

       	var options = {
        	title: "Heat Map",
        	colorAxis: {colors: ['yellow','red']},
        	backgroundColor: '#336699',
        	region: regionSelect
        };

        var geochart = new google.visualization.GeoChart($('#geo_div')[0]);
        geochart.draw(data, options);
    };
    
};
