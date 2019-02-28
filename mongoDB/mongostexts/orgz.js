db.orgz2.insertMany([{
   _id:01,
    oname:"IBM",
    oid:111,
   pro:[{
  
    pname:"ATT",
    pid:01,
    domain:"sap",
    workers:[1,2],
    
}]
},
    {
        _id:02,
    oname:"Cogniznt",
oid:222,
 pro:[ {
         pname:"TMob",
    pid:02,
    domain:"oracle",
        workers:[3,4,5,6]

    },
     {
         pname:"Volvo",
    pid:03,
    domain:"oracle",
        workers:[7,8,9,10]

    }]

    },
     {
        _id:03,
    oname:"Wipro",
   oid:333,
        pro:[{
    pname:"ATT",
    pid:01,
    domain:"sap",
    workers:[1,2],
    
},
    {
         pname:"TMob",
    pid:02,
    domain:"oracle",
        workers:[3,4,5,6]

    }]

    }
    
    ]);


  //



    db.orgz2.aggregate([{$lookup:{from:"employess",
    localField:"pro.workers",
    foreignField:"_id",
    as:"EmployeesInThisProject"}},
    {
$unwind: "$EmployeesInThisProject" 
},
    { $match:{}},
    {$group:{_id:"$oname","TotalSalInvested":{$sum:"$EmployeesInThisProject.salary"}}}])

////

    db.orgz1.aggregate([{$lookup:{from:"employess",
    localField:"pro.workers",
    foreignField:"employess._id",
    as:"EmployeesInThisProject"}}
   ])


    
