function daugyba(a, b) {
if (typeof a !== 'number') {
    return 'Pirmasis parametras tur buti skaiciaus tipo';
}
if (!isFinite(a)) {
    return `Pirmasis parametras turi būti skaičius ir negali būti ${a}`;
}
if (typeof b !== 'number') {
    return 'Antrasis parametras tur buti skaiciaus tipo';
}
if (!isFinite(b)) {
    return `Antrasis parametras turi būti skaičius ir negali būti ${b}`;
}
    const rez = a * b;
    return rez;
}

console.log(daugyba(4, 5));
console.log(daugyba(14, 54));
console.log(daugyba(-3, 23));
console.log(daugyba(3.14, 590));
console.log(daugyba('trys', 'penki'));

console.log(daugyba(4, 5), '->', 20);
console.log(daugyba(44, 5), '->', 220);
console.log(daugyba(-44, -55), '->', 2420);
console.log(daugyba(0, 0), '->', 0);
console.log(daugyba(0, 54850), '->', 0);
console.log(daugyba(3.14, 2), '->', 6.28);
console.log(daugyba(3, 5), '->', 15);