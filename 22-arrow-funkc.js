const daugyba = (a, b) => {
    return a * b;
}

const atsDaugyba = daugyba(8,5);
console.log(atsDaugyba);

const dalyba = (a, b) => a / b;

const atsDalyba = dalyba(8, 5);
console.log(atsDalyba);

const kvadratu = a => a * a;

const atsKvadratu = kvadratu (8);
console.log(atsKvadratu);

const vardas = 'Antanas';

const pirmaRaide = name => name[0];
const paskutineRaide = name => name[name.length - 1];

const raide = pirmaRaide(vardas);
const paskutine = paskutineRaide(vardas);

console.log(raide);
console.log(paskutine);