// actual body with methods implementations
var emp = {
    id: 1,
    name: 'Bob Marley',
    email: 'bob@marley.com',
    street: 'Chowpati',
    city: 'Mumbai',
    state: 'Maharashtra',
    zip: 20001,
    salary: 500000,
    getNameAndEmail: function () {
        return emp.name + ' ' + emp.email;
    }
};
// child to parent 
var _parent = {
    id: 1,
    name: 'Mohsin',
    email: 'mo@gmail.com'
};
var _child = _parent;
// parent to child
var __child = {
    id: 1,
    name: 'Mohsin',
    email: 'mo@gmail.com'
    //,salary: 10
};
var __parent = __child;
console.log(emp.getNameAndEmail());
