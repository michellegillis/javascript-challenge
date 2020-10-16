// from data.js
var tableData = data;

// table
var tbody = d3.select("tbody");


function buildTable(data){
    tbody.html("")
    data.forEach(function(tableFill){
        console.log(tableFill)
        var row = tbody.append('tr');
        var row2 = tbody.append('tr');

        Object.entries(tableFill).forEach( function([x,y]){
            console.log(`x is ${x} y is ${y}`)
            row.append('td').text(y);
            row2.append('td').text('')
        })
    })
};

buildTable(tableData)

// search feature
var button = d3.select("#filter-btn");
// var input = d3.select(".form-group");

function search(inputValue) {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue)
    var dataCopy = tableData;

    Object.entries(tableData).forEach(([key, value]) => {
        dataCopy = dataCopy.filter(row => row[value] === inputValue);
    });        
    console.log(dataCopy)
    buildTable(dataCopy)   
};


button.on("click", search);
