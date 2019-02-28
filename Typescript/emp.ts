interface  Emp{
    id:number,
    salary:number,
    name:string
}
let employees:Emp[]
employees=[
    {
        id:1,
        salary:23000,
        name:'Mike'
    },
    {
        id:2,
        salary:20000,
        name:'Sam'
    },
    {
        id:3,
        salary:30000,
        name:'Ram'
    },
    {
        id:4,
        salary:25000,
        name:'Dean'
    },
    {
        id:5,
        salary:32000,
        name:'Rita'
    }
]

let e:Emp
const getEmplSal=(employees:Emp[])=>{
return employees.filter(e=>e.salary>=20000 && e.salary<30000).map(a=>{return a.name+" =>"+a.salary})
}



const sal=getEmplSal(employees)
console.log(sal)

/*const getSal=(employees:Emp[])=>{
    const sal=getEmplSal(employees)
    sal.
}

console.log('Employees with salary above 20k and below 30k',getSal(sal)*/
let empSals =(employees:Emp[],salaryFrom:number,salaryTo:number):string[]=>{ 
    return employees
    .filter(u=>u.salary>salaryFrom && u.salary<salaryTo)
    .map(u=>{ return u.name + "=>" + u.salary})
}
let salaryFrom= new Number(process.argv[2]);
let salaryTo= new Number(process.argv[3]);
console.log('Users inputs',empSals)