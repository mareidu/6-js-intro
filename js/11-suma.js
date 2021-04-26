const a = 8;
const b = 5;

const c = 99;
const d = 88;

const e = 2;
const f = 3;

function desimteriopaSuma (pirma, antra) {
    const s = (pirmas + antras) * 10;
    console.log(s);
}

desimteriopaSuma(e, f);
console.log('-------------');
desimteriopaSuma(a, b);
console.log('-------------');
desimteriopaSuma(c, d);
console.log('-------------');

function labas(vardas, amžius, vietovardis) {
    console.log(`Labas, as esu ${vardas}, man ${amzius} m. ir gyvenu ${vietovardis}.`);
}

labas('Petras', 34, 'Vilniuje');

function kvadratu(x) {
    console.log(x*x);
}

kvadratu(1204);