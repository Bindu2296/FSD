const http = require('http')

const server = http.createServer((req,res)=>{

if(req.url== '/status' && req.method=='GET'){
    res.end('welocome to nodejs')
}

if(req.url=='/users' && req.method=='POST')
{
    res.end(JSON.stringify({id:1,name:'Bob'})

}
})

server.listen(1200,()=>{
    console.log('server started')
})