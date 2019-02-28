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
       
      // $('#valite').text('The name is : '+x+' The email : '+y)
     /* let rows='';
      $('#card').forEach(element => {
          rows=rows+ `<table><tr><td>Name</td><td>${element.x}</td></tr><tr><td>DOB</td><td>${element.y}</td></tr><tr><td>Address</td><td>${element.y1}</td></tr><tr><td>DL No:</td><td>${element.z}</td></tr>`
      });
    let tab=$(rows);*/
 $('#valite').html(`<table><tr><td>Name</td><td>${x}</td></tr><tr><td>DOB</td><td>${y}</td></tr><tr><td>Address</td><td>${y1}</td></tr><tr><td>DL No:</td><td>${z}</td></tr>`);
   // $('#valite').html(tab);
    });
    

});