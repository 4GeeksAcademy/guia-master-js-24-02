let car ={
  model:"Toyota",
  year:2025,
  color:"red"
}
function removeProperty(obj, key) {
  // your code here
  
    // your code here
    delete obj[key];
    return obj;
}
console.log(removeProperty(car,"year"));

