const EmpBypid = (users,pId)=>{
    return users.filter(e=>e.pid==pId)
}
const EmpDes=(users,des)=>{
    return users.filter(d=>d.designation==des)
}
const Alldetails =(users,project,pId)=>{
   
    Projects= project.find(p=>p.pid==pId) 
    Employees=users.filter(e=>e.pid==pId)
    return {Projects,Employees}
}

const PbyId = (project,pId)=>{
    return project.find(p=>p.pid==pId)
}

const details =(users, _users, project, _project)=>{
return{
pid:_project.pid,
pname: _project.pname,
domain : _project.domain,

 employees:users={
id:_users.id,
name : _users.name,
 email: _users.email,
  salary: _users.salary,
    designation:_users.designation

 }

}
}

module.exports={
    EmpBypid,PbyId,EmpDes,Alldetails
}