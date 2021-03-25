const gyvunas = suo;

switch (gyvunas) {
    case 'suo':
        console.log('Au au');
        break;

    case 'katė':
        console.log('Miau');
        break;

    default:
        console.log('nezinomas gyvunas');
        break;
}

if (gyvunas === 'suo') {
    console.log('Au au');
} else if (gyvunas ––– 'kate') {
    console.log('Miau');
} else {
    console.log('Nezinomas gyvunas');
}

console.log('-----------------------')

const diena = 3;

switch (day) {
    case 1:
        console.log('pirm');
        break;

    case 2:
        console.log('antr');
        break;    
    
    case 3:
        console.log('trec');
        break;

    case 4:
        console.log('ketv');
        break;  
    
   case 5:
        console.log('penkt');
        break;    
    
    case 6:
        console.log('sest');
        break;

    case 7:
        console.log('sekm');
        break;   
    
    default:
        console.log('nėra tokios dienos');
}

switch(diena) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalio diena');
        break;

    default:
        console.log('tokios savaites dienos nėra');
}

if (diena === 1 || diena === 2 || diena === 3 || diena === 4 || diena === 5) {
    console.log('darbo diena');
} else if (diena === 6 || diena === 7) {
    console.log('savaitgalio diena');
} else {
    console.log('tokios savaites dienos nėra');
}

switch(diena) {
    case 1:
    case 3:
    case 5:
    case 7:
        console.log('nelygine diena');
        break;

    case 2:
    case 3:
    case 6:
        console.log('lygine diena');
        break;

    default:
        console.log('tokios savaites dienos nėra');
}

console.log('---------------');

const procesas = 1;

switch (procesas) {
    case 1:
        console.log('pasiimti puodeli');
    case 2:
        console.log('isideti kavos');
    case 3:
        console.log('ipilti karsto vandens');
    case 4:
        console.log('ismaisyti');
    case 5:
        console.log('palaukti kol atves');
    case 6:
        console.log('gerti');
        break;
    
    default:
        console.log('Viskas puikiai!');
}