google.load("visualization", "1", {packages:["corechart"]});

function getData( dataArray ) {
    var data = new google.visualization.DataTable();
    data.addColumn( 'number', '1st dimension' );
    data.addColumn( 'number', '2nd dimension' );
    data.addColumn({ type: 'string', role: 'tooltip' });
    data.addRows( dataArray );
    return data;
}

function getOptions() {
    return {
        title: '2D projection of the multidimensional dataset',
        hAxis: {title: '1st Dimension', textPosition: 'none' },
        vAxis: {title: '2st Dimension', textPosition: 'none' },
	explorer: {} ,
        legend: 'none'
    };
}

function drawFullDataset() {
    var data = getData( pcaFullDataset );
    var options = getOptions();

    var chart = new google.visualization.ScatterChart( $('#full-dataset-plot')[0] );
    chart.draw( data, options );
}

function drawWelfareDataset() {
    var data = getData( pcaWelfareDataset );
    var options = getOptions();

    var chart = new google.visualization.ScatterChart( $('#welfare-dataset-plot')[0] );
    chart.draw( data, options );
}

function drawHealthcareDataset() {
    var data = getData( pcaHealtcareDataset );
    var options = getOptions();

    var chart = new google.visualization.ScatterChart( $('#healthcare-dataset-plot')[0] );
    chart.draw( data, options );
}
