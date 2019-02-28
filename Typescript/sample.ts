const execute=(action:string,x:number,y:number)=>{

    let result:number =0
    switch(action){
        case 'ADD':
          return _add(x,y);
          break;
            



    }
}
const _add=(x:number,y:number)=>{
    return x+y
}

const _diff=(x:number,y:number)=>{
    return x-y
}
const _div=(x:number,y:number)=>{
    return x/y
}
const _mul=(x:number,y:number)=>{
    return x*y
}

let _action='ADD';
let _x=10;
let _y=5;

const result= execute(_action,_x,_y);
console.log(`${_action} :: ${result}`)

