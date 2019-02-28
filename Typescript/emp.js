var employees;
employees = [
    {
        id: 1,
        salary: 23000,
        name: 'Mike'
    },
    {
        id: 2,
        salary: 20000,
        name: 'Sam'
    },
    {
        id: 3,
        salary: 30000,
        name: 'Ram'
    },
    {
        id: 4,
        salary: 25000,
        name: 'Dean'
    },
    {
        id: 5,
        salary: 32000,
        name: 'Rita'
    }
];
var e;
var getEmplSal = function (employees) {
    return employees.filter(function (e) { return e.salary >= 20000 && e.salary < 30000; }).map(function (a) { return a.name + " =>" + a.salary; });
};
var sal = getEmplSal(employees);
console.log(sal);
/*const getSal=(employees:Emp[])=>{
    const sal=getEmplSal(employees)
    sal.
}

console.log('Employees with salary above 20k and below 30k',getSal(sal)*/
var empSals = function (employees, salaryFrom, salaryTo) {
    return employees
        .filter(function (u) { return u.salary > salaryFrom && u.salary < salaryTo; })
        .map(function (u) { return u.name + "=>" + u.salary; });
};
var salaryFrom = new Number(process.argv[2]);
var salaryTo = new Number(process.argv[3]);
console.log('Users inputs', empSals);
