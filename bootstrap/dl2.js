$(document).ready(()=>{
    // custom validator
   
   /* $.validator.addMethod('PasswordVal',(value,element)=>{
       //let pexp= "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])";
        let pexp= /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#])([a-zA-z0-9!@#]{8})$/ ;

        let isValid = pexp.test(value);

        return isValid;
    });*/
    // validate the form
 //$('#card').dialog();

    window.onload=function(){
        document.getElementById("dlnum").value=Math.random();
    }
    $('#sbt-register').click(()=>{
        $('#frm-registration').validate({
            rules:{
                name: 'required',
                dob:'required',
                address:'required'
            },
            messages:{
                name : 'Name cannot be left blank',
                dob:'DOB cannot be blank ',
                address:'Address cannot be blank'
                
                
            
            }
        });
        let pname = $('#name').val();
        let pdob = $('#dob').val();
        let paddress = $('#address').val();
     let pdlnum=$('#dlnum').val();
        
       localStorage.setItem('a',pname);
       localStorage.setItem('b',pdob);
       localStorage.setItem('c',paddress);
       localStorage.setItem('d',pdlnum);

       const x=localStorage.getItem('a',pname);
       const y=localStorage.getItem('b',pdob);
       const y1=localStorage.getItem('c',paddress);
       const z=localStorage.getItem('d',pdlnum);

       users1=[x,y,y1,z];
       
       
      /* var array = [];
       var selectedIndex = -1;
       if (selectedIndex === -1) {
       array.push(users1);
    } else {
       array.splice(selectedIndex, 1, users1);
    }
    localStorage.studentsRecord = JSON.stringify(array);
    
       if (localStorage.studentsRecord) {
       array = JSON.parse(localStorage.studentsRecord);
        for (var i = 0; i < array.length; i++) {
            prepareTableCell(i, array[i].name, array[i].dob, array[i].address, array[i].dlnum);
        }}
        function prepareTableCell(index, pname, pdob, paddress, pdlnum) {
            var table = document.getElementById("valite");
            var row = table.insertRow();
            var action1Cell = row.insertCell(0)
            var firstNameCell = row.insertCell(1);
            var lastNameCell = row.insertCell(2);
            var rollNumCell = row.insertCell(3);
            var subjectCell = row.insertCell(4);
            action1Cell.innerHTML= `<div class="card" id='card' style='width: 50em'>
            <div class="card-header" align="center">Your Info</div>
        <div card="card-body">  <div  class="row">
          <div class="col-md-4">
    <img class="card-img-top img-fluid" src="Tulips.jpg" /></div>
            <div id="valite" class="card-text">`
            firstNameCell.innerHTML = pname;
            lastNameCell.innerHTML = pdob;
            rollNumCell.innerHTML = paddress;
            subjectCell.innerHTML = pdlnum;
        }

    */ 
   let cards='';

     /*  users1.forEach(element => {
          cards=cards +
          `<div class="card" id='card' style='width: 50em'>
          <div class="card-header" align="center">Your Info</div>
      <div class="card-body">  <div  class="row">
        <div class="col-md-4">
  <img class="card-img-top img-fluid" src="Tulips.jpg" /></div>
          <div id="valite" class="card-text">
  <table><tr><td>Name</td><td>${element.x}</td></tr><tr><td>DOB</td><td>${element.y}</td></tr><tr><td>Address</td><td>${element.y1}</td></tr><tr><td>DL No:</td><td>${element.z}</td></tr>
 </table> </div></div>
  </div>
</div> `});
    let tab= `${cards}`;
 //$('#valite').html(`<table><tr><td>Name</td><td>${x}</td></tr><tr><td>DOB</td><td>${y}</td></tr><tr><td>Address</td><td>${y1}</td></tr><tr><td>DL No:</td><td>${z}</td></tr>`);
    $('#valite').html(tab);
    }); */


  for(var i=0;i<localStorage.length;i++)
  {
      let m=i+1;
      let n=localStorage.getItem(m);
    cards=cards +
          `<div class="card" id='card' style='width: 50em'>
          <div class="card-header" align="center">Your Info</div>
      <div class="card-body">  <div  class="row">
        <div class="col-md-4">
  <img class="card-img-top img-fluid" src="Tulips.jpg" /></div>
          <div id="valite" class="card-text">
  <table><tr><td>Name</td><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).name}</td></tr><tr><td>DOB</td><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).dob}</td></tr><tr><td>Address</td><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).address}</td></tr><tr><td>DL No:</td><td>${JSON.parse(localStorage.getItem(localStorage.key(i))).dlnum}</td></tr>
 </table> </div></div>
  </div>
</div> `};  
    
 let tab= `${cards}`;
 //$('#valite').html(`<table><tr><td>Name</td><td>${x}</td></tr><tr><td>DOB</td><td>${y}</td></tr><tr><td>Address</td><td>${y1}</td></tr><tr><td>DL No:</td><td>${z}</td></tr>`);
    $('#valite').html(tab);
    });
});
