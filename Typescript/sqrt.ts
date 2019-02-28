let arr:number[]=[]
arr[0]=10
arr[1]=2
//console.log(`Length of Array:${arr.length}`)
//console.log(`${arr[0]}`)
let number:number[]=[4,9,12,10,20]
let index:number
let max:number=number[0];
for(index=0;index<number.length;index++){
    if(max<number[index])
    {
   max= number[index]

    }
    
}
console.log(max);
let temp:number
for( index=0;index<number.length;index++)
{
    if(number[index]>number[index+1])
    {
        number[index]=number[index]+number[index+1]
        number[index+1]=number[index]-number[index+1]
        number[index]=number[index]-number[index+1]
    }
}
console.log(number);
let arr1:number[]
arr1=[]
let k=0
for (let i =2; i <= max; i++) {
    for(let j=0;j<=number.length;j++)
    {
      if(i*i==number[j])
        {
              arr1[k]=number[j];
              k++;

        }
    }
}
    
console.log(arr1)

let max1:number=arr1[0];
for(index=0;index<arr1.length;index++){
    if(max1<arr1[index])
    {
   max1= number[index]

    }
    
}
console.log(`Max perfect number : ${max1}`)
