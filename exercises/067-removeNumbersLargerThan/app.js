let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for(let element in obj) {
        if(typeof obj[element] === 'number' && obj[element] > num) {
            delete obj[element]
        }
    }
    return obj;
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }