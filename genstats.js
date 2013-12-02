function genstats(){
    
    var myList = document.getElementById("genstatsList");
    var title = myList.options[myList.selectedIndex].text;
    var dataset = [
	['Country', 'Total Medals'],
	['Afghanistan', 1],
	['Albania', 0],
	['Algeria', 1],
	['Andorra', 0],
	['Angola', 0],
	['Antigua and Barbuda', 0],
	['Argentina', 4],
	['Armenia', 3],
	['Australia', 35],
	['Austria', 0],
	['Azerbaijan', 10],
	['Bahamas', 1],
	['Bahrain', 1],
	['Bangladesh', 0],
	['Barbados', 0],
	['Belarus', 12],
	['Belgium', 3],
	['Belize', 0],
	['Benin', 0],
	['Bermuda', 0],
	['Bhutan', 0],
	['Bolivia', 0],
	['Bosnia and Herzegovina', 0],
	['Botswana', 1],
	['Brazil', 17],
	['Bulgaria', 2],
	['Burkina Faso', 0],
	['Burundi', 0],
	['Cambodia', 0],
	['Cameroon', 0],
	['Canada', 18],
	['Cape Verde', 0],
	['Central African Republic', 0],
	['Chad', 0],
	['Chile', 0],
	['China', 88],
	['Colombia', 8],
	['Comoros', 0],
	['Democratic Republic of the Congo', 0],
	['Republic of the Congo', 0],
	['Costa Rica', 0],
	['Cote dIvoire', 0],
	['Croatia', 6],
	['Cuba', 14],
	['Cyprus', 1],
	['Czech Republic', 10],
	['Denmark', 9],
	['Djibouti', 0],
	['Dominica', 0],
	['Dominican Republic', 2],
	['Ecuador', 0],
	['Egypt', 2],
	['El Salvador', 0],
	['Equatorial Guinea', 0],
	['Eritrea', 0],
	['Estonia', 2],
	['Ethiopia', 7],
	['Fiji', 0],
	['Finland', 3],
	['France', 34],
	['Gabon', 1],
	['Gambia', 0],
	['Georgia', 7],
	['Germany', 44],
	['Ghana', 0],
	['Greece', 2],
	['Grenada', 1],
	['Guatemala', 1],
	['Guinea', 0],
	['Guinea-Bissau', 0],
	['Guyana', 0],
	['Haiti', 0],
	['Honduras', 0],
	['Hong Kong, China', 1],
	['Hungary', 17],
	['Iceland', 0],
	['India', 6],
	['Indonesia', 2],
	['Iran', 12],
	['Iraq', 0],
	['Ireland', 5],
	['Israel', 0],
	['Italy', 28],
	['Jamaica', 12],
	['Japan', 38],
	['Jordan', 0],
	['Kazakhstan', 13],
	['Kenya', 11],
	['Kiribati', 0],
	['Korea, Dem. Rep.', 6],
	['Korea, Rep.', 28],
	['Kuwait', 1],
	['Kyrgyzstan', 0],
	['Lao Peoples Democratic Republic', 0],
	['Latvia', 2],
	['Lebanon', 0],
	['Lesotho', 0],
	['Liberia', 0],
	['Libya', 0],
	['Lithuania', 5],
	['Luxembourg', 0],
	['Macedonia', 0],
	['Madagascar', 0],
	['Malawi', 0],
	['Malaysia', 2],
	['Maldives', 0],
	['Mali', 0],
	['Malta', 0],
	['Marshall Islands', 0],
	['Mauritania', 0],
	['Mauritania', 0],
	['Mauritius', 0],
	['Mexico', 7],
	['Micronesia (Federated States of)', 0],
	['Moldova', 2],
	['Monaco', 0],
	['Mongolia', 5],
	['Montenegro', 1],
	['Morocco', 1],
	['Mozambique', 0],
	['Myanmar', 0],
	['Namibia', 0],
	['Nauru', 0],
	['Nepal', 0],
	['Netherlands', 20],
	['New Zealand', 13],
	['Nicaragua', 0],
	['Niger', 0],
	['Nigeria', 0],
	['Norway', 4],
	['Oman', 0],
	['Pakistan', 0],
	['Palau', 0],
	['Panama', 0],
	['Papua New Guinea', 0],
	['Paraguay', 0],
	['North Korea', 6],
	['Peru', 0],
	['Philippines', 0],
	['Poland', 10],
	['Portugal', 1],
	['Puerto Rico', 2],
	['Qatar', 2],
	['Romania', 9],
	['Russia', 82],
	['Rwanda', 0],
	['Saint Kitts and Nevis', 0],
	['Saint Lucia', 0],
	['Saint Vincent and the Grenadines', 0],
	['Samoa', 0],
	['San Marino', 0],
	['Sao Tome and Principe', 0],
	['Saudi Arabia', 1],
	['Senegal', 0],
	['Serbia', 4],
	['Seychelles', 0],
	['Sierra Leone', 0],
	['Singapore', 2],
	['Slovakia', 4],
	['Slovenia', 4],
	['Solomon Islands', 0],
	['Somalia', 0],
	['South Africa', 6],
	['South Korea', 28],
	['Spain', 17],
	['Sri Lanka', 0],
	['Sudan', 0],
	['Suriname', 0],
	['Swaziland', 0],
	['Sweden', 8],
	['Switzerland', 4],
	['Syria', 0],
	['Taiwan', 2],
	['Tajikistan', 1],
	['Tanzania', 0],
	['Thailand', 3],
	['Timor-Leste', 0],
	['Togo', 0],
	['Tonga', 0],
	['Trinidad and Tobago', 4],
	['Tunisia', 3],
	['Turkey', 5],
	['Turkmenistan', 0],
	['Tuvalu', 0],
	['Uganda', 1],
	['Ukraine', 20],
	['United Arab Emirates', 0],
	['United Kingdom', 65],
	['United States', 104],
	['Uruguay', 0],
	['Uzbekistan', 4],
	['Vanuatu', 0],
	['Venezuela', 1],
	['Vietnam', 0],
	['West Bank and Gaza', 0],
	['Yemen', 0],
	['Zambia', 0],
	['Zimbabwe', 0]
    ];
    
    if (title == 'Heat Map') {
    	google.load("visualization", "1", {packages:["geochart"], "callback" : drawGeoChart});
    } else if (title == 'Column Graph') {
    	google.load("visualization", "1", {packages:["corechart"], "callback" : drawColumnChart});
    } else if (title == "Line Graph") {
    	google.load("visualization", "1", {packages:["corechart"], "callback" : drawLineChart});
    };
    
    function drawGeoChart() {
        document.getElementById('geo_div').style.display = '';
        document.getElementById('column_div').style.display = 'none';
        document.getElementById('line_div').style.display = 'none';
	    var data = google.visualization.arrayToDataTable(dataset);
        var options = {
            title: title,
            colorAxis: {colors: ['yellow','red']},
            backgroundColor: '#336699',
        };
        var geochart = new google.visualization.GeoChart(document.getElementById('geo_div'));
        geochart.draw(data, options);
    };

    function drawColumnChart() {
        document.getElementById('column_div').style.display = '';
        document.getElementById('geo_div').style.display = 'none';
        document.getElementById('line_div').style.display = 'none';
	    var data = google.visualization.arrayToDataTable(dataset);
        var options = {
            title: title,
	    };
        columnchart = new google.visualization.ColumnChart(document.getElementById('column_div'));
        columnchart.draw(data, options);
    };

    function drawLineChart() {
        document.getElementById('line_div').style.display = '';
        document.getElementById('geo_div').style.display = 'none';
        document.getElementById('column_div').style.display = 'none';
	    var data = google.visualization.arrayToDataTable(dataset);
        var options = {
            title: title,
	    };
        var linechart = new google.visualization.LineChart(document.getElementById('line_div'));
        linechart.draw(data, options);
    };
    
};

