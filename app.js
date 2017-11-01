'use strict';

const airport = {
    name: 'Airport',
    min: 23,
    max: 65,
    avg: 6.3,
    hourlySales: hourlySales,
    salesByHour: [],
    render: render
}

const piosquare = {
    name: 'Pioneer Square',
    min: 3,
    max: 24,
    avg: 1.2,
    hourlySales: hourlySales,    
    salesByHour: [],
    render: render
}

const powells = {
    name: 'Powell\'s',
    min: 11,
    max: 38,
    avg: 3.7,
    hourlySales: hourlySales,    
    salesByHour: [],
    render: render
}

const stjohns = {
    name: 'St. Johns',
    min: 20,
    max: 38,
    avg: 2.3,
    hourlySales: hourlySales,    
    salesByHour: [],
    render: render  
}

const waterfront = {
    name: 'Waterfront',
    min: 2,
    max: 16,
    avg: 4.6,
    hourlySales: hourlySales,    
    salesByHour: [],
    render: render
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const stores = [airport, piosquare, powells, stjohns, waterfront];
const elStores = document.getElementById('stores');

// generate sales per hour, based on random number of customers

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

airport.hourlySales();
piosquare.hourlySales();
powells.hourlySales();
stjohns.hourlySales();
waterfront.hourlySales();

// random number generator

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// created object literals for each store instance
// object literal, airport
// const airportdiv = document.getElementById('airport-store');
// const airporth2 = document.createElement('h2');
// airporth2.textContent = airport.name;
// airportdiv.appendChild(airporth2);
// console.log(airportdiv);
// console.log(airporth2);

// const airportul = document.getElementById('airport-list');
// for (let i = 0; i < hours.length; i++) {
//     const airportli = document.createElement('li');
//     airportli.textContent = hours[i] + ': ' + airport.salesByHour[i].cookiesSold + ' cookies';
//     airporth2.appendChild(airportul);
//     airportul.appendChild(airportli); 
// }

// // object literal, piosquare
// const piosquarediv = document.getElementById('piosquare-store');
// const piosquareh2 = document.createElement('h2');
// piosquareh2.textContent = piosquare.name;
// piosquarediv.appendChild(piosquareh2);
// console.log(piosquarediv);
// console.log(piosquareh2);

// const piosquareul = document.getElementById('piosquare-list');
// for (let i = 0; i < hours.length; i++) {
//     const piosquareli = document.createElement('li');
//     piosquareli.textContent = hours[i] + ': ' + piosquare.salesByHour[i].cookiesSold + ' cookies';
//     piosquareh2.appendChild(piosquareul);
//     piosquareul.appendChild(piosquareli); 
// }

// // object literal, powells
// const powellsdiv = document.getElementById('powells-store');
// const powellsh2 = document.createElement('h2');
// powellsh2.textContent = powells.name;
// powellsdiv.appendChild(powellsh2);
// console.log(powellsdiv);
// console.log(powellsh2);

// const powellsul = document.getElementById('powells-list');
// for (let i = 0; i < hours.length; i++) {
//     const powellsli = document.createElement('li');
//     powellsli.textContent = hours[i] + ': ' + powells.salesByHour[i].cookiesSold + ' cookies';
//     powellsh2.appendChild(powellsul);
//     powellsul.appendChild(powellsli); 
// }

// // object literal, stjohns
// const stjohnsdiv = document.getElementById('stjohns-store');
// const stjohnsh2 = document.createElement('h2');
// stjohnsh2.textContent = stjohns.name;
// stjohnsdiv.appendChild(stjohnsh2);
// console.log(stjohnsdiv);
// console.log(stjohnsh2);

// const stjohnsul = document.getElementById('stjohns-list');
// for (let i = 0; i < hours.length; i++) {
//     const stjohnsli = document.createElement('li');
//     stjohnsli.textContent = hours[i] + ': ' + stjohns.salesByHour[i].cookiesSold + ' cookies';
//     stjohnsh2.appendChild(stjohnsul);
//     stjohnsul.appendChild(stjohnsli); 
// }

// // object literal, waterfront
// const waterfrontdiv = document.getElementById('waterfront-store');
// const waterfronth2 = document.createElement('h2');
// waterfronth2.textContent = waterfront.name;
// waterfrontdiv.appendChild(waterfronth2);
// console.log(waterfrontdiv);
// console.log(waterfronth2);

// const waterfrontul = document.getElementById('waterfront-list');
// for (let i = 0; i < hours.length; i++) {
//     const waterfrontli = document.createElement('li');
//     waterfrontli.textContent = hours[i] + ': ' + waterfront.salesByHour[i].cookiesSold + ' cookies';
//     waterfronth2.appendChild(waterfrontul);
//     waterfrontul.appendChild(waterfrontli); 
// }

//render function, constructor objects

function render (elParent) {
    const elH2 = document.createElement('h2');
    elH2.textContent = this.name;
    elParent.appendChild(elH2);
    const elUl = document.createElement('ul');
    elParent.appendChild(elUl);

    for (let i = 0; i < hours.length; i++) { 
        const elLi = document.createElement('li');
        console.log(this.salesByHour[i]);
        elLi.textContent = hours[i] + ': ' + this.salesByHour[i].cookiesSold + ' cookies';
        elUl.appendChild(elLi);
    }
};

airport.render(elStores);
piosquare.render(elStores);
powells.render(elStores);
stjohns.render(elStores);
waterfront.render(elStores);