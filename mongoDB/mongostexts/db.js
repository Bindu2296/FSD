db.empz.insertMany([{
   
    pname:"dapps",
    pid:121,
    domain:"sap",
    employees:[
    {
    id:1,
    name:"Sam",
    salary:25000,
    des:"devlpr" 
    },
    {
      id:2,
    name:"Dean",
    salary:20000,
    des:"testr" 
   
    },
     {
      id:3,
    name:"Jar",
    salary:26000 ,
    des:"devlpr" 
  
    }
]
},

    {
        pname:"eproj",
    pid:122,
    domain:"oracle",
   employees:[
   { id:4,
    name:"Eve",
    salary:75000,
    des:"devlpr" 
 
    },
    {
      id:5,
    name:"Matt",
    salary:50000,   
    }
]
    
}]);


//queries...
// unwind...employees with sal less than 50k
db.empz.aggregate([{
    $unwind: "$employees" 
    },
    {
        $match:{
            "employees.salary":{ $lt:50000 }
        }
    },
    {
        $project:
        {
            "name":1,
            "employees.name":1,
            "employees.salary":1
        }
    }
]).pretty()


//no. of employees based on project
db.empz.aggregate([{
    $unwind: "$employees" 
    },
    { $match:{}},
    {$group:{_id:"$pname","No. Of employees":{$sum:1}}
}
]);

// total sal invested in each project
db.empz.aggregate([{
    $unwind: "$employees" 
    },{ $match:{}},{$group:{_id:"$pname","TotalSalInvested":{$sum:"$employees.salary"}}}]);

    // first employees sal invested in each project
db.empz.aggregate([{
    $unwind: "$employees" 
    },{ $match:{}},{$group:{_id:"$pname","firstSalInvested":{$first:"$employees.salary"}}}]);

            
       

