let users =[
    {
        id: 1,
        name: 'Ram',
        email: 'ram@ramu.com',
        salary: 100000,
        pid:251,
        designation:"developer"
    },
    {
        id: 2,
        name: 'Shyam',
        email: 'shyam@shyamu.com',
        salary: 150000,
        pid:251,
        designation:"tester"


    },
    {
        id: 3,
        name: 'Gabbar',
        email: 'gabbar@gabbar.com',
        salary: 1000000,
        pid:252,
        designation:"developer"


    },
    {
        id: 4,
        name: 'Thakur',
        email: 'thakur@thakur.com',
        salary: 200000,
        pid:253,
        designation:"developer"


    },
    {
        id: 5,
        name: 'samba',
        email: 'sambha@gmail.com',
        salary: 5400,
        pid:252,
        designation:"tester"


    }
]

let project=[
    {
        pid:251,
        pname:'new',
        domain:'sap'
    },
    {
        pid:252,
        pname:'old',
        domain:'oracle'
    },
    {
        pid:253,
        pname:'mod',
        domain:'cloud'
    }

]

module.exports={
    users,project
}