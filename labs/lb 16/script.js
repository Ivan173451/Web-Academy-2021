/*These lines of javascript are supposed to display the information given in the form in the paragraphs in the after div and make the beofre div disappear when the button with the id "input_username_button" is pressed.*/
function submitForum(){ 
  var x = document.getElementById("before");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  let userName=document.userform.input_username.value;
  let userEmail=document.userform.input_email.value;
  let userPhone=document.userform.input_phoneNum.value;
  let userNameResult=document.getElementById("nameResult");
  let userEmailResult=document.getElementById("emailResult");
  let userPhoneResult=document.getElementById("phoneNumResult");
  
  userNameResult.innerHTML=userName;
  userEmailResult.innerHTML=userEmail;
  userPhoneResult.innerHTMl=userPhone;
  console.log(userEmail, userPhone, userName);
}

/*These lines of javascript cause the form is reappear when the button in the resutls are pressed.*/
function returnHome(){
  var x = document.getElementById("before");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}