const text = 'abcdef';
let reverse = '';

for (let i = 0; i < text.length; i++) {
    reverse = text[i] + reverse;
}

console.log(text, '->', reverse);

function reverseString(text) {
    let reverse = '';
    
    for (let i = 0; i < text.length; i++) {
        reverse = text[i] + reverse;
    }
    console.log(text, '->', reverse);

}

const pirmasZodis = 'Labas rytas';
reverseString(pirmasZodis);

reverseString('Lietuva');
reverseString('sedek ant kedes');
reverseString('anananasas');