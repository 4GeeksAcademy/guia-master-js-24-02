function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj;
}
console.log(addProperty({model:"Toyota"},"abs"))