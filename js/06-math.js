const pazymiai = [7, 10, 7];

const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);

console.log('--------------');

const marks = [10, 8, 6, 4];

const count = marks.length;
let suma1 = 0;
console.log('suma1: ', suma1);

suma1 = suma1 + marks[0]; //0+10
console.log('suma1: ', suma1);

suma1 = suma1 + marks[1]; //10+8
console.log('suma1: ', suma1);

suma1 = suma1 + marks[2]; //18+6
console.log('suma1: ', suma1);

suma1 = suma1 + marks[3]; //24+4
console.log('suma1: ', suma1);

const average = suma1 / count;

console.log('--------------');

const marks1 = [2, 4, 6, 8];

let suma2 = 0;
console.log(suma2);

suma2 += marks1[0]; // 0 + 2
console.log(suma2);

suma2 += marks1[1]; // 2 + 4
console.log(suma2);

suma2 += marks1[2]; // 6 + 6
console.log(suma2);

suma2 += marks1[3]; // 12 + 8
console.log(suma2);

console.log('--------------');

const marks2 = [2, 4, 6, 8];

let suma3 = 0;
let i = 0;
console.log(suma3);

suma3 += marks2[i];  // 0 + 2
console.log(suma3);

i += 1;
suma3 += marks2[i];  // 2 + 4
console.log(suma3);

i += 1;
suma3 += marks2[i];  // 6 + 6 
console.log(suma3);

i += 1;
suma3 += marks2[i];  // 12 + 8
console.log(suma3);

console.log('--------------');

const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let j = 0;

zodis += abc[j++];
zodis += abc[j++];
zodis += abc[j++];
zodis += abc[j++];
zodis += abc[j++];

console.log(zodis);

console.log('--------------');

let a = 5;
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);