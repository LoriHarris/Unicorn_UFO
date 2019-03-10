// from data.js
var tableData = data;
var tbody = d3.select("tbody")
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
    });

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var inputElement1 = d3.select("#state");
    var inputValue1 = inputElement1.property("value");
    if (inputValue === "") {
        location.reload();
    } else {
    d3.event.preventDefault();
   
  
    console.log(inputValue + inputValue1);
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    var filteredData1 = filteredData.filter(ufo => ufo.state === inputValue1);
    console.log(filteredData + filteredData1);

    var tbody = d3.select("tbody")
    tbody.html("");
    filteredData1.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
    
        });
    });
}
});


clear.on("click", function() {
    d3.event.preventDefault();
    
    var tbody = d3.select("tbody");
    // tbody.remove();
    tbody.html("");

});
// submit.on("click", function() {
//     d3.event.preventDefault();
//     var inputElement = d3.select("#datetime");
//     var inputValue = inputElement.property("value");
//     console.log(inputValue);
//     var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
//     console.log(filteredData);

//     var tbody = d3.select("tbody")
    
//     filteredData.forEach((ufo) => {
//         var row = tbody.append("tr");
//         Object.entries(ufo).forEach(([key, value]) => {
//           var cell = tbody.append("td");
//           cell.text(value);
//         });
    // });

