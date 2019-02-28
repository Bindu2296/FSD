let arr:number[]

arr = []

arr[0] = 10
arr[1] = 2

console.log(`Length of Array : ${arr.length}`)
console.log(arr[0])
console.log(arr[1])

let numbers:number[] = [1,10,2,8,9,4]
let vals =[
    {
        id:1
    },{
        id:2
    }
]
console.log(numbers[1])

let index:number;
let index1:number;
let x:number;
for(index=0;index<numbers.length;index++){
    console.log('Number is ',numbers[index])
x=numbers[0];

}
for(index=1;index<numbers.length;index++){
if(x<numbers[index])
x=numbers[index];

}

console.log('Largest Number is ',x)


//Sorting...

for(index=0;index<numbers.length;index++){

    for(index1=index+1;index1<numbers.length;index1++){

 
if(numbers[index]<numbers[index1]){
    numbers[index]=numbers[index]+numbers[index1]
    numbers[index1]=numbers[index]-numbers[index1]
    numbers[index]= numbers[index]-numbers[index1]
}

}
}

for(let i=0;i<numbers.length;i++){

    console.log('Sorted Number is ',numbers[i])

}
console.log('Sorted Array is ',numbers)


//Perfect Square
function sqroot(num:number){
let t:number;
let sqr:number;
 sqr =num/2;
do{
    t=sqr;
    sqr=((t+(num/t))/2);
}
while((t-sqr)!=0)
return sqr;
}


for(index=0;index<numbers.length;index++){
x=numbers[0];
console.log('the sqroot is of ',numbers[index],' is ' ,sqroot(numbers[index]));

}
let num2:number[]=[]
let a=0;
for(let i=2;i<=numbers.length;i++){
    for(let j=0;j<=numbers.length;j++){
        if((i*i)==numbers[j]){
num2[a]=j;
a++;
        }
    }
}
console.log('Perfect sq root in the array ',num2);
let max:number=num2[0];
for(index=0;index<num2.length;index++){
    if(max<num2[index]){
        max=numbers[index]
    }
}
console.log('Max perfct sqrt no',max)




