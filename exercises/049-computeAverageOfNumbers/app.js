// Write your function here
function computeAverageOfNumbers(arr) {
    if(arr.length === 0) {
        return 0;
    }
    let sumaArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumaArr += arr[i];
    }
    return sumaArr / arr.length;
}