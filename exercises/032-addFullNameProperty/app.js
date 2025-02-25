let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

function addFullNameProperty(obj) {
  // Add your code after this line
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj;
}

console.log(addFullNameProperty(person));