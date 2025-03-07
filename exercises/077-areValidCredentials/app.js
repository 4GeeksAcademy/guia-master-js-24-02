// Write your function here
function areValidCredentials(name, pass) {
    return name.length > 3 && pass.length >= 8;
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true