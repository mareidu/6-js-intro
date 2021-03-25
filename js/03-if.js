const a = 7;
const b = 3;

if (a > b) {
    const rep = `${a} yra daugiau už ${b}`;
    console.log(rep);
}

console.log('----------');

const c=6;
const d=2;

if (c < d) {
    const cdMaziau = `${c} yra mažiau už ${d}`;
    console.log(cdMaziau);
} else {
    const cdNeMaziau = `${c} yra NE maziau uz ${d}`;
    console.log(cdNeMaziau);
}

console.log('----------');

const e = '32';
const f = 32;

if (e !== f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

console.log('----------');

const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log('Ismetame cookies sutikimo bloka... 1');
}

if (!cookiesAgreed) {
    console.log('Ismetame cookies sutikimo bloka... 2');
}


console.log('----------');

const userLoggedIn = true;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}

console.log('----------');

const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;

console.log(pomidoroIlgis);

console.log('----------');

const akiuspalva = 'Rudos';

if (akiuspalva === 'Melynos') {
    console.log('gražūs');
} else if (akiuspalva === 'Zalios') {
    console.log('seksualūs');
} else if (akiuspalva === 'Rudos') {
    console.log('Daug meluoja');
} else if (akiuspalva === 'Pilkos') {
    console.log('Pilki');
} else if (akiuspalva === 'Raudonos') {
    console.log('Perdaug kompiuterio');
} else {
    console.log('Nežinoma akių spalva');
}

if (akiuspalva === 'Melynos') {
    console.log('gražūs');
} else {
    if (akiuspalva === 'Zalios') {
    console.log('seksualūs');
    } else {
        if (akiuspalva === 'Rudos') {
    console.log('Daug meluoja');
        } else {
            if (akiuspalva === 'Pilkos') {
            console.log('Pilki');
            } else {
                if (akiuspalva === 'Raudonos') {
                console.log('Perdaug kompiuterio');
                } else {
                    console.log('Nežinoma akių spalva');
                }
            }
        }
    }
}

console.log('----------');

if (akiuspalva === 'Melynos') {
    console.log('gražūs');
} 

if (akiuspalva === 'Zalios') {
    console.log('seksualūs');
}

if (akiuspalva === 'Rudos') {
    console.log('Daug meluoja');
}

if (akiuspalva === 'Pilkos') {
    console.log('Pilki');
}

if (akiuspalva === 'Raudonos') {
    console.log('Perdaug kompiuterio');
}

if (akiuspalva !== 'Mėlynos' &&
    akiuspalva !== 'Zalios' &&
    akiuspalva !== 'Rudos' &&
    akiuspalva !== 'Pilkos' &&
    akiuspalva !== 'Raudonos') {
    console.log('Neaiski akių spalva');
    }

    if (akiuspalva === 'Mėlynos' ||
    akiuspalva === 'Zalios' ||
    akiuspalva === 'Rudos' ||
    akiuspalva === 'Pilkos' ||
    akiuspalva === 'Raudonos') {
    console.log('zinoma akių spalva');
    }   