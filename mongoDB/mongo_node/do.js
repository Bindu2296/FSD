// load mongo client
const MongoClient = require('mongodb').MongoClient
const _url = 'mongodb://localhost:27017'
const _db = 'test'

// fetch all employees
const getProjects = (callback)=>{
    // Step 1: connect to mongo server
    MongoClient.connect(_url,(err,conn)=>{
        console.log('Connected to Mongo Server')
        // Step 2: connect to data base
        // Step 3: fetch all documents from the collections
        conn.db(_db).collection('empz').find({},{fields:{ _id:0}}).toArray((err,emps)=>{
            // callback function to handle async flow 
            callback(err,emps)
        })
    })
}
//getProjects only
const getOnlyProjects = (callback)=>{
    // Step 1: connect to mongo server
    MongoClient.connect(_url,(err,conn)=>{
        console.log('Connected to Mongo Server')
        // Step 2: connect to data base
        // Step 3: fetch all documents from the collections
        conn.db(_db).collection('empz').find({},{fields:{ _id:0,pname:1,pid:1,domain:1}}).toArray((err,emps)=>{
            // callback function to handle async flow 
            callback(err,emps)
        })
    })
}
// add a new employee inside project with pid
const addEmployee  = (pid,emp,callback)=>{
    console.log(emp)

    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('empz').updateOne({pid:pid},{$push:{employees:emp}},(err,data)=>{
            callback(err,{
                message : 'Employee Updated'
            })
        

            
        })
    })
}

// add a new Project
const addProject  = (emp)=>{
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('empz').insertOne(emp,(err)=>{
            console.log('Project Added')
        })
    })
}
// update an employee
const updateEmployee = (emp,callback)=>{
    const id = emp.id
    delete emp.id
    console.log(emp)
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('empz').updateOne({
            _id: id
        },{
            $set: emp
            
        },(err,data)=>{
            callback(err,{
                message : 'Employee Updated'
            })
        })
        // close the connection
        conn.close()
    })
}
// delete an employee with _id
const deleteById = (pid,eId,callback)=>{
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('empz').updateOne({pid:pid},{$pull:{employees:{id:eId}}},(err,data)=>{
            callback(err,{
                message : 'Employee Updated'
            })
            conn.close()
        })
    })
}



module.exports={
    _all : getProjects,
    _pro:getOnlyProjects,
    _addEmp : addEmployee,
    _addPro : addProject,
    _del: deleteById,
    _update:updateEmployee
}