function genstats(){
    
    var myList = document.getElementById("genstatsList");
    
    var geomapOption = document.getElementById("list1");
    var columnchartOption = document.getElementById("list2");
    var linechartOption = document.getElementById("list3");
    
    var title = myList.options[myList.selectedIndex].text;
    var dataset = [

	[['Country', 'Total Medals', 'Team Size'],
	['Afghanistan', 1 ,6],
	['Albania', 0 ,11],
	['Algeria', 1 ,39],
	['Andorra', 0 ,6],
	['Angola', 0 ,35],
	['Antigua and Barbuda', 0 ,5],
	['Argentina', 4 ,142],
	['Armenia', 3 ,25],
	['Australia', 35 ,413],
	['Austria', 0 ,70],
	['Azerbaijan', 10 ,53],
	['Bahamas', 1 ,26],
	['Bahrain', 1 ,12],
	['Bangladesh', 0 ,5],
	['Barbados', 0 ,6],
	['Belarus', 12 ,172],
	['Belgium', 3 ,118],
	['Belize', 0 ,3],
	['Benin', 0 ,5],
	['Bermuda', 0 ,8],
	['Bhutan', 0 ,2],
	['Bolivia', 0 ,5],
	['Bosnia and Herzegovina', 0 ,6],
	['Botswana', 1 ,4],
	['Brazil', 17 ,266],
	['Brunei Darussalam', 0 ,3],
	['Bulgaria', 2 ,63],
	['Burkina Faso', 0 ,5],
	['Burundi', 0 ,6],
	['Cambodia', 0 ,6],
	['Cameroon', 0 ,37],
	['Canada', 18 ,279],
	['Cape Verde', 0 ,3],
	['Central African Republic', 0 ,6],
	['Chad', 0 ,3],
	['Chile', 0 ,35],
	['China', 88 ,371],
	['Colombia', 8 ,109],
	['Comoros', 0 ,3],
	['Democratic Republic of the Congo', 0 ,4],
	['Republic of the Congo', 0 ,7],
	['Cook Islands', 0 ,8],
	['Costa Rica', 0 ,11],
	['Ivory Coast', 0 ,10],
	['Croatia', 6 ,110],
	['Cuba', 14 ,110],
	['Cyprus', 1 ,13],
	['Czech Republic', 10 ,133],
	['Denmark', 9 ,115],
	['Djibouti', 0 ,6],
	['Dominica', 0 ,2],
	['Dominican Republic', 2 ,35],
	['Ecuador', 0 ,36],
	['Egypt', 2 ,116],
	['El Salvador', 0 ,10],
	['Equatorial Guinea', 0 ,2],
	['Eritrea', 0 ,12],
	['Estonia', 2 ,33],
	['Ethiopia', 7 ,35],
	['Fiji', 0 ,9],
	['Finland', 3 ,56],
	['France', 34 ,335],
	['Gabon', 1 ,28],
	['Gambia', 0 ,2],
	['Georgia', 7 ,35],
	['Germany', 44 ,395],
	['Ghana', 0 ,9],
	['Greece', 2 ,105],
	['Grenada', 1 ,10],
	['Guatemala', 1 ,19],
	['Guinea', 0 ,3],
	['Guinea-Bissau', 0 ,4],
	['Guyana', 0 ,6],
	['Haiti', 0 ,5],
	['Honduras', 0 ,31],
	['Hong Kong, China', 1 ,42],
	['Hungary', 17 ,158],
	['Iceland', 0 ,28],
	['India', 6 ,83],
	['Indonesia', 2 ,22],
	['Iran', 12 ,53],
	['Iraq', 0 ,8],
	['Ireland', 5 ,66],
	['Israel', 0 ,38],
	['Italy', 28 ,281],
	['Jamaica', 12 ,50],
	['Japan', 38 ,303],
	['Jordan', 0 ,9],
	['Kazakhstan', 13 ,115],
	['Kenya', 11 ,50],
	['Kiribati', 0 ,3],
	['North Korea', 6 ,55],
	['South Korea', 28 ,255],
	['Kuwait', 1 ,10],
	['Kyrgyzstan', 0 ,14],
	['Laos', 0 ,3],
	['Latvia', 2 ,46],
	['Lebanon', 0 ,10],
	['Lesotho', 0 ,4],
	['Liberia', 0 ,4],
	['Libya', 0 ,5],
	['Lithuania', 5 ,62],
	['Luxembourg', 0 ,9],
	['Macedonia', 0 ,4],
	['Madagascar', 0 ,7],
	['Malawi', 0 ,3],
	['Malaysia', 2 ,30],
	['Maldives', 0 ,5],
	['Mali', 0 ,6],
	['Malta', 0 ,5],
	['Marshall Islands', 0 ,4],
	['Mauritania', 0 ,2],
	['Mauritius', 0 ,11],
	['Mexico', 7 ,106],
	['Micronesia (Federated States of)', 0 ,6],
	['Moldova', 2 ,22],
	['Monaco', 0 ,6],
	['Mongolia', 5 ,29],
	['Montenegro', 1 ,34],
	['Morocco', 1 ,72],
	['Mozambique', 0 ,6],
	['Myanmar', 0 ,6],
	['Namibia', 0 ,9],
	['Nauru', 0 ,2],
	['Nepal', 0 ,5],
	['Netherlands', 20 ,182],
	['New Zealand', 13 ,196],
	['Nicaragua', 0 ,6],
	['Niger', 0 ,6],
	['Nigeria', 0 ,53],
	['Norway', 4 ,65],
	['Oman', 0 ,4],
	['Pakistan', 0 ,23],
	['Palau', 0 ,5],
	['Panama', 0 ,8],
	['Papua New Guinea', 0 ,8],
	['Paraguay', 0 ,8],
	['Peru', 0 ,16],
	['Philippines', 0 ,11],
	['Poland', 10 ,217],
	['Portugal', 1 ,80],
	['Puerto Rico', 2 ,25],
	['Qatar', 2 ,12],
	['Romania', 9 ,103],
	['Russia', 82 ,435],
	['Rwanda', 0 ,7],
	['Saint Kitts and Nevis', 0 ,7],
	['Saint Lucia', 0 ,4],
	['Saint Vincent and the Grenadines', 0 ,3],
	['Samoa', 0 ,8],
	['San Marino', 0 ,4],
	['Sao Tome and Principe', 0 ,2],
	['Saudi Arabia', 1 ,19],
	['Senegal', 0 ,35],
	['Serbia', 4 ,116],
	['Seychelles', 0 ,6],
	['Sierra Leone', 0 ,2],
	['Singapore', 2 ,23],
	['Slovakia', 4 ,46],
	['Slovenia', 4 ,68],
	['Solomon Islands', 0 ,4],
	['Somalia', 0 ,2],
	['South Africa', 6 ,133],
	['Spain', 17 ,289],
	['Sri Lanka', 0 ,7],
	['Sudan', 0 ,6],
	['Suriname', 0 ,5],
	['Swaziland', 0 ,3],
	['Sweden', 8 ,140],
	['Switzerland', 4 ,106],
	['Syria', 0 ,10],
	['Taiwan', 2 ,44],
	['Tajikistan', 1 ,16],
	['Tanzania', 0 ,7],
	['Thailand', 3 ,37],
	['Timor-Leste', 0 ,2],
	['Togo', 0 ,6],
	['Tonga', 0 ,3],
	['Trinidad and Tobago', 4 ,31],
	['Tunisia', 3 ,84],
	['Turkey', 5 ,114],
	['Turkmenistan', 0 ,10],
	['Tuvalu', 0 ,3],
	['Uganda', 1 ,16],
	['Ukraine', 20 ,236],
	['United Arab Emirates', 0 ,30],
	['United Kingdom', 65 ,556],
	['United States of America', 104 ,531],
	['Uruguay', 0 ,33],
	['Uzbekistan', 4 ,54],
	['Vanuatu', 0 ,5],
	['Venezuela', 1 ,69],
	['Vietnam', 0 ,18],
	['West Bank and Gaza', 0 ,5],
	['Yemen', 0 ,4],
	['Zambia', 0 ,7],
	['Zimbabwe', 0 ,7]],

	[['Country', 'Total Medals', 'Team Size'],
	['United States', 104, 531]],

	[['Country', 'Total Medals', 'Team Size'],
	['China', 88, 371]],

	[['Country', 'Total Medals', 'Team Size'],
	['Russia', 82, 435]],

	[['Country', 'Total Medals', 'Team Size'],
	['United Kingdom', 65, 556]],

	[['Country', 'Total Medals', 'Team Size'],
	['Germany', 44, 395]]
	
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
        document.getElementById('geomapList').style.display = '';
        document.getElementById('column_div').style.display = 'none';
        document.getElementById('columnchartList').style.display = 'none';
        document.getElementById('line_div').style.display = 'none';
        document.getElementById('linechartList').style.display = 'none';
	var data = google.visualization.arrayToDataTable(dataset[geomapOption.options[geomapOption.selectedIndex].value]);
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
        document.getElementById('columnchartList').style.display = '';
        document.getElementById('geo_div').style.display = 'none';
        document.getElementById('geomapList').style.display = 'none';
        document.getElementById('line_div').style.display = 'none';
        document.getElementById('linechartList').style.display = 'none';
	var data = google.visualization.arrayToDataTable(dataset[columnchartOption.options[columnchartOption.selectedIndex].value]);
        var options = {
            title: title,
	    };
        columnchart = new google.visualization.ColumnChart(document.getElementById('column_div'));
        columnchart.draw(data, options);
    };

    function drawLineChart() {
        document.getElementById('line_div').style.display = '';
        document.getElementById('linechartList').style.display = '';
        document.getElementById('geo_div').style.display = 'none';
        document.getElementById('geomapList').style.display = 'none';
        document.getElementById('column_div').style.display = 'none';
         document.getElementById('columnchartList').style.display = 'none';
	var data = google.visualization.arrayToDataTable(dataset[linechartOption.options[linechartOption.selectedIndex].value]);
        var options = {
            title: title,
	    };
        var linechart = new google.visualization.LineChart(document.getElementById('line_div'));
        linechart.draw(data, options);
    };
    
};

