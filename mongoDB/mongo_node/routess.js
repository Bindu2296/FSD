const express = require('express')
const routes = express.Router()
const dao = require('./do')

// get all pro and employees
routes.get('/project/empz',(rq,rs)=>{
    dao._all((err,emps)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to load data"
            })
        }else{
            rs.status(200).send({
                empz : emps
            })
        }
    })
})
//get only projects
routes.get('/project',(rq,rs)=>{
    dao._pro((err,emps)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to load data"
            })
        }else{
            rs.status(200).send({
                Projects : emps
            })
        }
    })
})

// add a new employee
routes.post('/emp/add/:pid',(rq,rs)=>{
    dao._addEmp(parseInt(rq.params.id),rq.body,(err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request"
            })
        }else{
            rs.status(200).send(data)
        }
    })
})

// add a new project
routes.post('/project/add',(rq,rs)=>{
    rs.send({
        data: dao._addPro(rq.body)
    })
})


// edit an employee by id
routes.put('/employees/edit',(rq,rs)=>{
    dao._addEmp(rq.body,(err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request"
            })
        }else{
            rs.status(200).send(data)
        }
    })
})

// delete an employee
routes.delete('/delete/:pid/:eId',(rq,rs)=>{
    dao._del(parseInt(rq.params.pid),parseInt(rq.params.eId),(err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request"
            })
        }else{
            rs.status(200).send({
                message : "Employee Deleted"
            })
        }
    })
})

module.exports={
    routes
}