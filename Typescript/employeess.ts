interface User{
id:number,
name:string,
salary?:number,

}



interface UserId{
    etype:string
    getUserId:()=>string

}
class Services implements UserId{
    private users:User[]

    constructor(){
        this.users = [
            {
                id: 1,
                name: 'Xyz',
                salary :1000

            },
            {
                id: 2,
                name: 'Abc',
                salary:2000

            }
        ]
    }
    getUsers():User[]{
        return this.users
    }

    etype:string="Employee"
    getUserId=()=>{
        return this.etype
    }

}


class Business implements UserId{
    private users:User[]

    constructor(){
        this.users = [
            {
                id: 100,
                name: 'Sam',

            },
            {
                id: 2324,
                name: 'Sia',

            }
        ]
    }
    getUsers():User[]{
        return this.users
    }
etype:string="Employer"
getUserId=()=>{
    return this.etype
}

}
const emp=new Services()
const emp1=new Business()

console.log('the Service Users',emp.getUsers(),'the User type',emp.getUserId())
console.log('the Business Users',emp1.getUsers(),'the User type',emp1.getUserId())




