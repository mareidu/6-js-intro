function pazymiuVidurkis(vardas, pazymiai) {
    let suma = 0;

    for (let i = 0; i < pazymiai.length; i++) {
        suma += pazymiai[i];
    }
    const average =suma / pazymiai.length;
    console.log(`${vardas}: pazymiu vidurkis yra ${average}.`);
}

const mokykla = [
    ['Algis', [10, 2, 6, 7]],
    ['Dafnė', [5, 6, 4, 4]],
];

for (let i = 0; i < mokykla.length; i++) {
    const mokinys = mokykla[i];
    const name = mokinys[0];
    const marks = mokinys[1];

    pazymiuVidurkis(name, marks);
    pazymiuVidurkis(mokykla[i][0], mokykla[i][1]);
}