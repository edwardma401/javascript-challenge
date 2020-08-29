// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!

// Set the button and Form that will be clicked or entered.
var theButton = d3.select("#filter-btn");
var theForm = d3.select("#form");


// Apply on that will run function runEnter when the button and form are clicked or entered.
theButton.on("click", runEnter);
theForm.on("submit", runEnter);



// set the function runEnter that will filter data by date entered, and add values on the table.
function runEnter() {
    // prevent resetting the page to default
    d3.event.preventDefault();
    // form
    var inputElement = d3.select(".form-control");
    console.log(inputElement);
    var inputDate = inputElement.property("value");
    console.log(inputDate);
    
    // filter
    var theData = tableData.filter(item => item.datetime === String(inputDate));
    console.log(theData);


    // append data to the table on html page.
    theData.forEach( (item) => {
        var row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {console.log(key, value); var cell = row.append("td"); cell.text(value);});

    }
    
    )
    };


    