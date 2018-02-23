
// function to save object from console
(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console);

var oTable = document.getElementById('ASPxSplitter1_UC_GoogleMapsStnTable1_gviewStation_DXMainTable'),
//gets rows of table
    rowLength = oTable.rows.length,
    weatherStationList = [];
//loops through rows
for (i = 2; i < rowLength; i++){
    var weatherStation = {
            city : "",
            WMOcode : "",
            lat : "",
            long : "",
            alt : ""
        },
        //gets cells of current row
        oCells = oTable.rows.item(i).cells,
        //gets amount of cells of current row
        cellLength = oCells.length;

        weatherStation.city = oCells.item(1).innerHTML,
        weatherStation.WMOcode = oCells.item(2).innerHTML,
        weatherStation.lat = oCells.item(20).innerHTML,
        weatherStation.long = oCells.item(21).innerHTML,
        weatherStation.alt = oCells.item(22).innerHTML;

    weatherStationList.push( weatherStation );
}
JSON.stringify( weatherStationList );
console.save(weatherStationList, weatherStationList.json)
