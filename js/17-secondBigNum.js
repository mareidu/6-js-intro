function bigNum(list) {
    if (!Array.isArray(list)) {
        return 'ERROR: netinkamas tipas, turi būti masyvas';
    }
    if (list.length === 0) {
        return 'ERROR: array is empty';
    }

    let biggest = -Infinity;
    let secondBiggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];

        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }

        if (number > biggest) {
            secondBiggest = biggest;
            biggest = number;
        } else if (number > secondBiggest && number < biggest) {
            secondBiggest = number;
        }
    }

    if (secondBiggest === -Infinty) {
        return 'Error: nėra skaičių sąraše';
    }

    return secondBiggest;
}

console.log(bigNum([1,2,3]) '->', 2);
console.log(bigNum(-5, 78, 14, 0, 181]), '->', 18);
console.log(bigNum([69, 69, 69,69,66]), '->', 66);