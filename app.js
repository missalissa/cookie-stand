'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// store object constructors

const stores = [
    new Store ('Airport', 23, 65, 6.3), 
    new Store ('Pioneer Square', 3, 24, 1.2),
    new Store ('Powell\'s', 23, 65, 6.3),
    new Store ('St. Johns', 23, 65, 6.3),
    new Store ('Waterfront', 23, 65, 6.3)
    ];


// store object constructor function (these properties are particular to each store)

function Store(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.salesByHour = []; // empty array that will be populated when the hourlySales function is run
    this.salesByDay = 0; // sums salesByHour array

    // generate sales per hour, based on random number of customers; calculate total daily sales
    for (let i = 0; i < hours.length; i++) {
        const hour = hours[i];
        const numCustomers = getRandomIntInclusive(this.min, this.max);
        const numCookies = Math.floor(numCustomers * this.avg);
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        }
        this.salesByHour.push(oneHour);
        this.salesByDay = this.salesByDay + numCookies; // calculate total daily sales
    }  
    console.log('this is sales by hour: ' + this.salesByHour);
    console.log('this is sales by day: ' + this.salesByDay);
}


// rendering/build function (these properties apply to ALL stores)

Store.prototype.build = function() {
    const stores = document.getElementById('store-list');

    // table construction
    const tableRow = document.createElement('TR'); // creates table row (one row per store)
    const rowHeader = document.createElement('TH'); // creates row header (store name)
    rowHeader.textContent = this.name; // populates row header with store name
    tableRow.appendChild(rowHeader); // appends row header to table row
    console.log(tableRow);

    // fill row with data
    for (let i = 0; i < this.salesByHour.length; i++) {
        const tableDataSales = document.createElement('TD'); // creates row items (TDs) for sales data
        tableRow.appendChild(tableDataSales); // appends table data to table row 
        tableDataSales.textContent = this.salesByHour[i].cookiesSold; // populates row with data (why is cookiesSold needed?)
    }

    // add totals to end of row
    const tdTotalSales = document.createElement('TD'); // creates td for total sales data
    tableRow.appendChild(tdTotalSales); // appends cell to table row 
    tdTotalSales.textContent = this.salesByDay; // populates cell with total

console.log('table row = ', tableRow);
this.row = tableRow;
return this.row;
}

// this is a cleaner way to build each row, when stores are stored in an array

const tbody = document.getElementById('table-body');
for (let i = 0; i < stores.length; i++) {
    tbody.appendChild(stores[i].build());
}


// fill header row with hours as a function

const buildTableHead = function () {
    const thead = document.getElementById('table-head'); // references table head
    const theadRow = document.createElement('TR') // creates table head row
    const thBlank = document.createElement('TH') // creates blank first cell
    theadRow.appendChild(thBlank); // appends blank cell to table head row
    
    for (let i = 0; i < hours.length; i++) {
        const theadHours = document.createElement('TH'); // creates row items <THs> for each hour
        theadHours.textContent = hours[i]; // populates row with data (why is cookiesSold needed?)    
        theadRow.appendChild(theadHours); // appends table head data to table head row 
    }    
    thead.appendChild(theadRow); // appends table head row to table head

    const thTotal = document.createElement('TH') // creates totals cell
    thTotal.textContent = 'Daily Location Total'; // popluates cell with text
    theadRow.appendChild(thTotal); // appends totals cell to table head row
};

buildTableHead ();


// random number generator 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive 
}
   

// begin form
const form = document.getElementById('new-location');

// add event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('the form heard a submit event!');

     // get data from form inputs
     const name = document.getElementById('name').value;
     const min = document.getElementById('min').value;
     const max = document.getElementById('max').value;
     const avg = document.getElementById('avg').value;

     // create new instance of store
     const newStore = new Store(name, min, max, avg);
     
     // append data to DOM
     tbody.appendChild(newStore.build());
});