function convertDoubleSpaceToSingle(str) {
    // your code here
    return str.split("  ").join(" ")
}

/* .split convierte el string en un array indicandole que lo haga en los dobles espacios
y  luego .join lo convierte en un string separandolo con un espacio */

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
