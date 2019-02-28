$(document).ready(()=>{
    // custom validator
    $.validator.addMethod('customEmailValidator',(value,element)=>{
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let isValid = regex.test(value);
        return isValid; 
    });
    $.validator.addMethod('PasswordVal',(value,element)=>{
       //let pexp= "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])";
        let pexp= /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#])([a-zA-z0-9!@#]{8})$/ ;

        let isValid = pexp.test(value);

        return isValid;
    });
    // validate the form
    $('#sbt-register').click(()=>{
        $('#frm-registration').validate({
            rules:{
                name: 'required',
                email: {
                    required: true,
                    customEmailValidator: true
                },
                phone: {
                    required: true,
                    min: 4000000001,
                    max: 9999999999
                },
                pass:{
                    required:true,
                    PasswordVal:true
                }
            },
            messages:{
                name : 'Name cannot be left blank',
                email: {
                    required: 'Email cannot be left blank',
                    customEmailValidator: 'Please re-enter a valid email'
                },
                phone: {
                    required: 'Phone cannot be left blank',
                    min: 'Phone number cannot be less than 4000000001',
                    max: 'Phone number cannot be greater than 9999999999'
                },
                pass:{
                    required: 'password cannot be left blank',
                    PasswordVal: 'Please re-enter a valid password'
                
                }
            
            }
        });
    });
    $('#login').click(()=>{
        $('#frm-login').validate({
            rules:{
                uname: 'required',
                
               
                pass:{
                    required:true,
                    PasswordVal:true
                }
            },
            messages:{
                uname : 'Name cannot be left blank',
                
         
                pass:{
                    required: 'password cannot be left blank',
                    PasswordVal: 'Please re-enter a valid password'
                
                }
            
            }
        });
    });
});