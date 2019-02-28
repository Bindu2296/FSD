$(document).ready(()=>{
    // login button
    $('#login').click((event)=>{
        // event.preventDefault();
        // console.log(event);
        // console.log('login clicked');
        let user = $('#username').val();
        let pwd = $('#password').val();
        let emil =$('#email').val();
        let uexp= "[a-zA-z0-9]";
        let exp = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";
        let pexp= "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])";
        if(user == ""){
            // cease the default behavior submit button
            event.preventDefault();
            $('#username').focus();
            $('#username').addClass('input-error');
            $('#error-message').text('Username cannot be left blank');
        } else if(!user.match(uexp)){
            event.preventDefault();
            $('#email').focus();
            $('#email').addClass('input-error');
            $('#error-message').text('Username not valid')
        }
         else if(emil == ""){
            event.preventDefault();
            $('#email').focus();
            $('#email').addClass('input-error');
            $('#error-message').text('Email cannot be empty')
        }
      /*  else if(  emil.match(exp) ){
            event.preventDefault();
            $('#email').focus();
            $('#email').addClass('input-error');
            $('#error-message').text('Email cannot have this string')
        } */
        else if(!emil.match(exp) ){
            event.preventDefault();
            $('#email').focus();
            $('#email').addClass('input-error');
            $('#error-message').text('Email not valid')
        }
       

        else if(pwd == "" ){
            // cease the default behavior submit button
            event.preventDefault();
            $('#password').addClass('input-error');
            $('#password').focus();
            $('#error-message').text('Password cannot be left blank');
        }
        else if(!pwd.match(pexp)){
            event.preventDefault();
            $('#password').focus();
            $('#password').addClass('input-error');
            $('#error-message').text('Password not valid')
        }
        else if(pwd.length<8){
            event.preventDefault();
            $('#password').focus();
            $('#password').addClass('input-error');
            $('#error-message').text('Password not strong')
        }
    });
});
