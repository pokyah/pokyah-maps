
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

var oTable = document.getElementsByClassName('result')[0],
//gets rows of table
    rowLength = oTable.rows.length,
    weatherStationList = [];
//loops through rows
for (i = 2; i < rowLength; i++){
    var weatherStation = {
            city : "",
            commune : "",
            connection : "",
            lat : "",
            long : "",
            alt : ""
        },
        //gets cells of current row
        oCells = oTable.rows.item(i).cells,
        //gets amount of cells of current row
        cellLength = oCells.length;

        //check if station is OK
        if( oCells.item(10).innerHTML ==' Ok' && oCells.item(1).innerHTML !==' China'){
            weatherStation.city = oCells.item(1).innerHTML,
            weatherStation.commune = oCells.item(2).innerHTML,
            weatherStation.connection = oCells.item(7).innerHTML,
            weatherStation.lat = oCells.item(4).innerHTML,
            weatherStation.long = oCells.item(5).innerHTML,
            weatherStation.alt = oCells.item(3).innerHTML;

            weatherStationList.push( weatherStation );
        }

}
JSON.stringify( weatherStationList );
console.save(weatherStationList, weatherStationList.json)
