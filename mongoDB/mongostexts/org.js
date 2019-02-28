db.org.insertMany([{
   _id:01,
    oname:"IBM",
    oid:111,
    pro:[011]
},
    {
        _id:02,
    oname:"Cogniznt",
oid:222,
 pro:[011,022]

    },
     {
        _id:03,
    oname:"Wipro",
   oid:333,
        pro:[033,022]

    }
    
    ]);

    //cost incurred by each project
    db.org.aggregate([{$lookup:{from:"project",
                            localField:"pro",
                            foreignField:"_id",
                            as:"projectsInComp"}},
                        {$lookup:{from:"employess",
                            localField:"workers",
                            foreignField:"_id",
                            as:"EmployeesInThisProject"}},

                            {
    $unwind: "$EmployeesInThisProject" 
    },
                            { $match:{}},
                            {$group:{_id:"$pname","TotalSalInvested":{$sum:"$EmployeesInThisProject.salary"}}}])




 db.org.aggregate([{$lookup:{from:"project",
                            localField:"pro",
                            foreignField:"_id",
                            as:"projectsInComp"}},

                        {$lookup:{from:"employess",
                            localField:"projectsInComp.workers",
                            foreignField:"projectsInComp._id",
                            as:"EmployeesInThisProject"}}]).pretty();

//


   