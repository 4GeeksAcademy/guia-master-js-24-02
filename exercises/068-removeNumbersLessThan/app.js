let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for(let element in obj) {
        if(typeof obj[element] === 'number' && obj[element] < num) {
            delete obj[element];
        }
    }
    return obj;
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }