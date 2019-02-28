
 const validate =()=>{
    savedata();
     /*const pname = document.getElementById('pname');
     const price = document.getElementById('price');
     const cat = document.getElementById('cat');
     const sku = document.getElementById('sku');
     const quantity = document.getElementById('quantity');*/
     const errorM = document.getElementById('error-message');
     if(pname.value == '' && sku.value == '' ){
        errorM.innerHTML = 'These fields cannot be left blank';
        pname.focus();
        sku.focus();

     }
    else if(pname.value == ''){
         errorM.innerHTML = 'Product name cannot be left blank';
         pname.focus();
        }

       
     else if(sku.value == ''){
         errorM.innerHTML = '<i>sku cannot be left blank</i>';
         sku.focus();
     }
     else if(isNaN(price.value)){
         errorM.innerHTML = '<i>Invalid data</i>';
         price.value = ''; // clear the textbox
         price.focus();    
     }
     else{
        getdata();
        //addrow();

     }
    }

    const savedata =()=>{
        const pname = document.getElementById('pname');
        const price = document.getElementById('price');
        const cat = document.getElementById('cat');
        const sku = document.getElementById('sku');
        const quantity = document.getElementById('quantity');

        localStorage.setItem('a',pname.value);
        localStorage.setItem('b',price.value);
        localStorage.setItem('c',cat.value);
        localStorage.setItem('d',sku.value);
        localStorage.setItem('e',quantity.value);

       
        
    }


    const getdata=()=>{
        const geta =  localStorage.getItem('a',pname.value);
        const getb =  localStorage.getItem('b',price.value);
        const getc =  localStorage.getItem('c',cat.value);
        const getd =  localStorage.getItem('d',sku.value);
        const gete =  localStorage.getItem('e',quantity.value);


    
 
const arr= [geta,getb,getc,getd,gete];
var container= document.getElementById('container');
var table=document.createElement('table');
var tbody = document.createElement('tbody');
for(i=0;i<arr.length;i++)
{
    var vals=arr[i];
    var row= document.createElement('tr');
    for(var j=0;j<vals.length;j++){
        var cell=document.createElement('td');
        cell.textContent=vals[j];
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}
table.appendChild(tbody);
container.appendChild(table);
    }
   // const addrow=()=>
    {
        var table=document.createElement('table');
newrow=table.insertRow(table.length)   
cell1=newrow.insertCell(0);
cell2=newrow.insertCell(1);
cell3=newrow.insertCell(2);
cell4=newrow.insertCell(3);
cell5=newrow.insertCell(4);
const pname = document.getElementById('pname');
const price = document.getElementById('price');
const cat = document.getElementById('cat');
const sku = document.getElementById('sku');
const quantity = document.getElementById('quantity');
cell1.innerHTML=pname;
cell2.innerHTML=price;
cell3.innerHTML=cat;
cell4.innerHTML=sku;
cell5.innerHTML=quantity;

    }