let car = {
  model: 'Toyota'
};

function getProperty(obj, key) {
  // your code here
  return obj[key];
}

let output = getProperty(car, 'model');
console.log(output); // --> 'Toyota'