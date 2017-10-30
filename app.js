'use strict';

function custPerHour(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function salesPerHour() {
    const sales = custPerHour(this.min, this.max) * this.avg;
    return sales;
}

const pdx = {
    min: 23,
    max: 65,
    avg: 6.3,
    custRate: custPerHour,
    salesRate: salesPerHour
}

pdx.custRate(pdx.min, pdx.max);
console.log(pdx.custRate(pdx.min, pdx.max));

pdx.salesRate(pdx.avg);
console.log(pdx.salesRate(pdx.avg));

const piosquare = {
    min: 3,
    max: 24,
    avg: 1.2
}

const powells = {
    min: 11,
    max: 38,
    avg: 3.7
}

const stjohns = {
    min: 20,
    max: 38,
    avg: 2.3
}

const waterfront = {
    min: 2,
    max: 16,
    avg: 4.6
}
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const stores = [pdx, piosquare, powells, stjohns, waterfront];