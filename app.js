'use strict';

const pdx = {
    min: 23,
    max: 65,
    avg: 6.3,
    hourlySales: hourlySales,
    // calculates total
    render: render
    // function(){
        // const ul = document.getElementById('store-list');
        // const li = document.createElement('li');
        //  li.textContent = this.hour + ' ' + this.salesByHour;
        // //  ul.appendChild(li);
        //  return li;
}

const piosquare = {
    min: 3,
    max: 24,
    avg: 1.2,
    hourlySales: hourlySales,
    render: render
}

const powells = {
    min: 11,
    max: 38,
    avg: 3.7,
    hourlySales: hourlySales,
    render: render
}

const stjohns = {
    min: 20,
    max: 38,
    avg: 2.3,
    hourlySales: hourlySales,
    render: render  
}

const waterfront = {
    min: 2,
    max: 16,
    avg: 4.6,
    hourlySales: hourlySales,
    render: render
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// const stores = [pdx, piosquare, powells, stjohns, waterfront];

// const ul = document.getElementById('store-list');

function hourlySales() {
    const salesByHour = [];
    for(let i = 0; i < hours.length; i++) {
        const hour = hours[i];
        const numCustomers = getRandomIntInclusive(this.min, this.max);
        const numCookies = Math.floor(numCustomers * this.avg);
        const oneHour = {
            hour: hour,
            cookiesSold: numCookies
        };
        salesByHour.push(oneHour);
    }    
    this.salesByHour = salesByHour;
}

pdx.hourlySales();
piosquare.hourlySales();
powells.hourlySales();
stjohns.hourlySales();
waterfront.hourlySales();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

render();

function render () {
    const ul = document.getElementById('store-list');
    const li = document.createElement('li');
    li.textContent = "List item";
    ul.appendChild(li);
}

// render();
// function render () {
// const ul = document.getElementById('store-list');
// const li = document.createElement('li');
// li.textContent = "List item";
// ul.appendChild(li);
// }


// const stores = [pdx, piosquare, powells, stjohns, waterfront];