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
const pdxdiv = document.getElementById('pdx-store');
const pdxh2 = document.createElement('h2');
pdxh2.textContent = pdx.name;
pdxdiv.appendChild(pdxh2);
console.log(pdxdiv);
console.log(pdxh2);

const pdxul = document.getElementById('pdx-list');
for (let i = 0; i < hours.length; i++) {
    const pdxli = document.createElement('li');
    pdxli.textContent = hours[i] + ': ' + pdx.salesByHour[i].cookiesSold + ' cookies';
    pdxh2.appendChild(pdxul);
    pdxul.appendChild(pdxli); 
}

// object literal, piosquare
const piosquarediv = document.getElementById('piosquare-store');
const piosquareh2 = document.createElement('h2');
piosquareh2.textContent = piosquare.name;
piosquarediv.appendChild(piosquareh2);
console.log(piosquarediv);
console.log(piosquareh2);

const piosquareul = document.getElementById('piosquare-list');
for (let i = 0; i < hours.length; i++) {
    const piosquareli = document.createElement('li');
    piosquareli.textContent = hours[i] + ': ' + piosquare.salesByHour[i].cookiesSold + ' cookies';
    piosquareh2.appendChild(piosquareul);
    piosquareul.appendChild(piosquareli); 
}

// object literal, powells
const powellsdiv = document.getElementById('powells-store');
const powellsh2 = document.createElement('h2');
powellsh2.textContent = powells.name;
powellsdiv.appendChild(powellsh2);
console.log(powellsdiv);
console.log(powellsh2);

const powellsul = document.getElementById('powells-list');
for (let i = 0; i < hours.length; i++) {
    const powellsli = document.createElement('li');
    powellsli.textContent = hours[i] + ': ' + powells.salesByHour[i].cookiesSold + ' cookies';
    powellsh2.appendChild(powellsul);
    powellsul.appendChild(powellsli); 
}

// object literal, stjohns
const stjohnsdiv = document.getElementById('stjohns-store');
const stjohnsh2 = document.createElement('h2');
stjohnsh2.textContent = stjohns.name;
stjohnsdiv.appendChild(stjohnsh2);
console.log(stjohnsdiv);
console.log(stjohnsh2);

const stjohnsul = document.getElementById('stjohns-list');
for (let i = 0; i < hours.length; i++) {
    const stjohnsli = document.createElement('li');
    stjohnsli.textContent = hours[i] + ': ' + stjohns.salesByHour[i].cookiesSold + ' cookies';
    stjohnsh2.appendChild(stjohnsul);
    stjohnsul.appendChild(stjohnsli); 
}

// object literal, waterfront
const waterfrontdiv = document.getElementById('waterfront-store');
const waterfronth2 = document.createElement('h2');
waterfronth2.textContent = waterfront.name;
waterfrontdiv.appendChild(waterfronth2);
console.log(waterfrontdiv);
console.log(waterfronth2);

const waterfrontul = document.getElementById('waterfront-list');
for (let i = 0; i < hours.length; i++) {
    const waterfrontli = document.createElement('li');
    waterfrontli.textContent = hours[i] + ': ' + waterfront.salesByHour[i].cookiesSold + ' cookies';
    waterfronth2.appendChild(waterfrontul);
    waterfrontul.appendChild(waterfrontli); 
}



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