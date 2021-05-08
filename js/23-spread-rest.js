const spread1 = [5. 9, 3, -14];
console.log(spread1);

const spread2 = [...spread1, 7, 77,777];
console.log(spread2);

const spread3 = [7, 77, 777, ...spread];
console.log(spread3);

const spread4 = ['asd', 'qwe', 874, true];
console.log(spread4);

const spread5 = [...spread4, ...spread1];
console.log(spread5);

const spread6 = [...spread1, ...spread4];
console.log(spread6);

console.clear();

const average = (...list) => {
    const sum=list.reduce((total, num) => total + num, 0);
    return sum / list.length;
}

const ave = average(10, 2, 8, 4, 6);
console.log(ave);

const apieMane = (name, age, ...list) => {
    return `Sveiki, aš esu ${name}, man yra ${age} metu ir as megstu ${list.join(', ')}.`;
}

const petras = apieMane('Petras', 55, 'pyragus', 'obuoli', 'kriause');
console.log(petras);

console.clear();

const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];

desimtainiai.forEach((n,i) => desimtainiai[i] = Math.round(n));

console.log(desimtainai);