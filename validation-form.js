const sub = document.getElementById("form_button");




  sub.addEventListener('click', function validate(){
    
        var name = document.getElementById("name_input").value;
        var phone = document.getElementById("telephone_input").value;
        var email = document.getElementById("email_input").value;
        var message = document.getElementById("message_input").value;
        var error_message = document.getElementById("error_message");
        
        error_message.style.padding = "10px";
        
        var text;
        if(name.length < 5){
          text = "Please Enter valid Name";
          error_message.innerHTML = text;
          return false;
        }
      
        if(phone.length < 7){
          text = "Please Enter valid Phone Number";
          error_message.innerHTML = text;
          return false;
        }
        if(email.indexOf("@") == -1 || email.length < 6){
          text = "Please Enter valid Email";
          error_message.innerHTML = text;
          return false;
        }
        if(message.length <= 10){
          text = "Please Enter More Than 140 Characters";
          error_message.innerHTML = text;
          return false;
        }
        alert("Form Submitted Successfully!");
        return true;
      
  })