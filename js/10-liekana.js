const nuo = 1;
const iki = 11;
const daliklis = 3;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis == 0) {
        kiekis++;
    }
}

const ats = `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`;
console.log(ats);