var column =["GDP2011","F2012","M2012","TeamSize","Number of dentistry personnel","Number of nursing and midwifery personnel","Number of physicians","Breast cancer deaths per 100_000 women","Breast cancer new cases per 100000 women","Breast cancer number of female deaths","Capital formation",
"Colon and Rectum cancer new cases per 100000 men","Colon and Rectum cancer new cases per 100000 women","Colon and Rectum cancer number of female deaths",
"Colon and Rectum cancer number of male deaths","Lung cancer new cases per 100000 men","Lung cancer new cases per 100000 women","Lung cancer number of female deaths",	
"Lung cancer number of male deaths","Prostate cancer deaths per 100000 men","Surface area","Tax revenue"																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																						
];

function getId( str ) {
	return str.replace(/ /g, '-');
}

correlation = [1.620525629155674e-11, 3.823360302614386e-10, 4.910070407988125e-10, 1.0435647292413e-09, -1.021722548638581e-08, -4.330423175136994e-07, -7.606026964545252e-07, -1.834479187590535e-08, -6.290370343565338e-08, -4.817752752107282e-07, 1.333472937355754e-07, -1.467052087137976e-09, -5.355793207997355e-09, -1.965021729186099e-09, -7.371994537409069e-11, -5.048682829772618e-08, -7.089560834082591e-08, -6.484838925087961e-08, -9.175853618312955e-08, 1.008489106700303e-08, -4.192843224961981e-06, -1.005249202737765e-11]

function database(country_name){
	var d = [["Afghanistan", "1", "20300000000", "1", "5", "6", "900", "14930", "5970", "874", "2021", "220", "600000", "193", "236", "316", "377", "173", "675", "190", "732", "151", "692.5", "0"],["Albania", "0", "13000000000", "4", "7", "11", "1035", "14637", "3626", "300", "843", "272", "1100000", "163", "218", "285", "382", "154", "639", "193", "811", "109", "3499.12", "4790000000"],["Algeria", "1", "189000000000", "18", "21", "39", "9553", "69749", "35368", "2019", "2880", "195000", "4682690", "552", "565", "588", "602", "205", "1510", "209", "1552", "411", "137535.56", "69700000000"],
["Angola","0","101000000000","30","5","35","222","18977","1165","654","905","0","940000","106", "130", "113", "140", "58", "207", "59", "212", "285", "8991.46", "14900000000"],["Argentina","4","446000000000","43","99","142","28900","29000","108800","5362","17017","926722","13500000","2686","2985","4911","5989","1804","7182","1894","8384","3641","152711.86","314000000000"], ["Armenia","3","10200000000","4","21","25","1255","14806","11133","561","1162","1990","203309","137","115","187","159","155","905","179","1056","116","4345.5","3400000000"], ["Australia","35","1370000000000","188","225","413","21296","187837","47875","2667","11176","1787000","16400000","2208","2642","5715","6539","2246","4936","2679","5565","2646","368858.53","468000000000"], ["Austria","0","418000000000","31","39","70","4467","53782","30068","1637","4635","1174000","7989955","1325","1325","2451","2713","980","2390","1096","2660","1282","73602.43","209000000000"], ["Azerbaijan","10","63400000000","14","39","53","2431","71265","30766","557","1295","2184","1782900","119","124","178","187","219","891","259","1049","145","36629.01","9930000000"], ["Bahamas","1","7790000000","11","15","26","21","1323","312","32","81","13382","186007","13","10","21","17","6","22","8","23","37","2106.8","4940000000"], ["Bahrain","1","22900000000","8","4","12","300","4410","1980","40","91","21432","649764","9","20","14","32","19","57","21","60","17","19668.35","10600000000"], ["Bangladesh","0","111000000000","1","4","5","2344","39471","42881","3376","7735","0","4327516","252","294","410","475","1337","8021","1460","8691","71","39952.26","61400000000"], ["Barbados","0","3690000000","0","6","6","63","988","322","47","109","31942","200138","23","21","36","33","6","18","6","19","77","1315.38","0"], ["Belarus","12","55100000000","77","95","172","4647","121357","46359","1254","2955","1564","1118000","1161","1074","1782","1532","421","3482","466","3825","567","63299.27","18300000000"], ["Belgium","3","512000000000","44","74","118","8305","146846","44124","2712","7429","2010584","9131705","1764","1732","3130","3304","1052","6235","1189","6518","2032","102599.33","249000000000"], ["Belize","0","1470000000","1","2","3","32","303","251","9","21","5022","97755","3","2","4","4","4","14","4","15","25","817.07","1080000000"], ["Benin","0","7290000000","1","4","5","12","5789","311","406","591","196","236175","66","83","70","89","10","37","10","38","210","2564.8","2730000000"], ["Bhutan","0","1690000000","2","0","2","65","730","52","74","170","0","17800","16","20","26","34","16","73","18","79","17","414.03","644000000"], ["Bolivia","0","24400000000","2","3","5","5997","18091","10329","357","765","10788","1800789","162","265","247","404","89","293","97","320","442","9251.6","9740000000"],["Bosnia and Herzegovina","0","18100000000","2","4","6","629","18332","5540","600","1622","13702","1050000","374","462","663","826","312","1268","384","1529","270","26274.55","6440000000"]];

	//bigData have all countries 
	for (var i = 0;i < bigData.length;i++){
		if(country_name == bigData[i][0]){
		  return bigData[i];
		}
	}
}
function showContries(a){
	var w = a;
	w.length = 0;
	var d = ["Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Dem. Rep.", "Congo, Rep.", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Korea, Dem. Rep.", "Korea, Rep.", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Moldova", "Mongolia", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "Saudi Arabia", "Senegal", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

	w[0] = new Option("Select Country","Select Country",false,false);
	for (var i = 0;i <= d.length - 1;i++){
		w[i+1] = new Option(d[i],d[i],false,false);
	}
	var text;
	var inp;
	for (var i = 0;i < column.length;i++){
		var id = getId( column[i] );
		$label = $('<label for="'+id+'">: ' + column[i] + '</label>');
		$input = $('<input type="text" id="'+id+'" />');
		$('#input-fields').append($input);
		$('#input-fields').append($label);	
	}
	$("#PredictedB").prop("disabled",true);
}
function test(value){
	$("select option:first-child").prop("disabled",true);
	var d = database(value);
	for (var i = 0;i < column.length ;i++)
		$('#' + getId( column[i] )).val(d[i+2]);
	$("#PredictedB").removeProp("disabled");
}

function predicted(){
	var num = 0;
	for (var i = 0;i < column.length ;i++){
		foo = document.getElementById( getId( column[i] ) );
		num += foo.value*correlation[i];	
	}
	if (num < 0)
		num = 0;
	num =  Math.round(num);
	document.getElementById('PredictedValue').value = num;
	//alert(num + " Medal(s)");
}
function clearPrediction(){
	document.getElementById('PredictedValue').value = "";
}

