const randsk1 = 5;
console.log(randsk1);

const randsk2 = 15;
console.log(randsk2);

const randsk3 = 25;
console.log(randsk3);

const vardpava = 'Vardas ir pavarde';
console.log(vardpava);

const amzius = 'Amzius';
console.log(amzius);

const elpastas = 'El. pastas';
console.log(elpastas);

const msv1 = [4, 8, 15, 18, 36];
console.log(msv1);

const msv2 = [3, 7, 16, 75, -43];
console.log(msv2);

const msv3 = [3, 8, 45.90, 54.32, 12.56];
console.log(msv3);

const msv4 = ['Darzelis', 'Mokykla', 'Kolegija', 'Profesine', 'Universitetas'];
console.log(msv4);

const msv5 = ['Mano', 'batai buvo', 'du', 'vienas dingo', 'nerandu'];
console.log(msv5);

const msv6 = ['kraujas', 'limfa', 'kaulai', 'organai', 'raumenys'];
console.log(msv6);

console.log('*****************');

const suma = randsk1 + randsk2 + randsk3;
console.log(suma);

const rink = `${vardpava} ${amzius} ${elpastas}`;
console.log(rink);
//1-2+3-4+5
let amount1 = 0;
amount1 =  amount1 + msv3[0];
amount1 = amount1 - msv3[1];
amount1 = amount1 + msv3[2];
amount1 = amount1 - msv3[3];
amount1 = amount1 + msv3[4];
console.log(amount1);

let eiles = '';
eiles = eiles + ', ' + msv5[4];
eiles = eiles + ', ' + msv5[3];
eiles = eiles + ', ' + msv5[2];
eiles = eiles + ', ' + msv5[1];
console.log(eiles);