'use strict';

const pdx = {
    name: 'PDX',
    min: 23,
    max: 65,
    avg: 6.3,
    hourlySales: hourlySales,
    // calculates total
    // render: render
}

const piosquare = {
    name: 'Pioneer Square',
    min: 3,
    max: 24,
    avg: 1.2,
    hourlySales: hourlySales,
    // render: render
}

const powells = {
    name: 'Powell\'s',
    min: 11,
    max: 38,
    avg: 3.7,
    hourlySales: hourlySales,
    // render: render
}

const stjohns = {
    name: 'St. Johns',
    min: 20,
    max: 38,
    avg: 2.3,
    hourlySales: hourlySales,
    // render: render  
}

const waterfront = {
    name: 'Waterfront',
    min: 2,
    max: 16,
    avg: 4.6,
    hourlySales: hourlySales,
    // render: render
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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

// object literal, pdx
const div = document.getElementById('pdx-store');
const h2 = document.createElement('h2');
h2.textContent = pdx.name;
div.appendChild(h2);
console.log(div);
console.log(h2);

const ul = document.getElementById('pdx-list');
for (let i = 0; i < hours.length; i++) {
    const li = document.createElement('li');
    li.textContent = hours[i] + ': ' + pdx.salesByHour[i].cookiesSold + ' cookies';
    h2.appendChild(ul);
    ul.appendChild(li); 
}

// // object literal, piosquare
// const div = document.getElementById('store');
// const h2 = document.createElement('h2');
// h2.textContent = piosquare.name;
// div.appendChild(h2);
// console.log(div);
// console.log(h2);

// const ul = document.getElementById('list');
// for (let i = 0; i < hours.length; i++) {
//     const li = document.createElement('li');
//     li.textContent = hours[i] + ': ' + piosquare.salesByHour[i].cookiesSold + ' cookies';
//     h2.appendChild(ul);
//     ul.appendChild(li); 
// }


    // for(let i = 0; i < 14; i++) {

    //     }
    // const li = document.createElement('li');

// render function, revisit for constructor objects
// render();

// function render () {
//     const ul = document.getElementById('store-list');
//     for (let i = 0; i < hours.length; i++) { 
//         const li = document.createElement('li');
//         ul.textContent = this.name;
//         console.log(hours[i]);
//         console.log(this.salesByHour[i]);
//         li.textContent = hours[i] + ': ' + this.salesByHour[i].cookiesSold + ' cookies';
//         li.classList.add('hourlySales');
//         ul.appendChild(li);
//     }
// }
// pdx.render ();
// piosquare.render ();
// powells.render ();

    // function(){
        // const ul = document.getElementById('store-list');
        // const li = document.createElement('li');
        //  li.textContent = this.hour + ' ' + this.salesByHour;
        // //  ul.appendChild(li);
        //  return li;

// render();
// function render () {
// const ul = document.getElementById('store-list');
// const li = document.createElement('li');
// li.textContent = "List item";
// ul.appendChild(li);
// }


const stores = [pdx, piosquare, powells, stjohns, waterfront];