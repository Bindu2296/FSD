const express = require('express')
const server = express()
const parser = require('body-parser')
const service = require('./emp-service')
let empData = require('./edata').users
let pData= require('./edata').project

server.use(parser.json())
// port
const PORT = 12121

// status api
server.get('/status',(rq,rs)=>{
    rs.send({ message: 'Server is Up & Runnning'})
})

server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})

server.get('/users',(rq,rs)=>{
    rs.send({ data: empData })
})

server.get('/project',(rq,rs)=>{
    rs.send({ data1: pData })
})


server.get('/users/pid/:pid',(rq,rs)=>{
    rs.send({
        data : service.EmpBypid(empData,parseInt(rq.params.pid))
    })
})

server.get('/project/pid/:pid',(rq,rs)=>{
    rs.send({
        data1 : service.PbyId(pData,parseInt(rq.params.pid))
    })
})

server.get('/pid/:pid',(rq,rs)=>{
    rs.send({
        data2 : service.Alldetails(empData,pData,parseInt(rq.params.pid))
    })
})


server.get('/users/:designation',(rq,rs)=>{
    rs.send({
        designation : service.EmpDes(empData,(rq.params.designation))
    })
})






