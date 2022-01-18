    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const signInform = document.querySelector(".sign-in-container")

    const signInbtn = document.querySelector(".login-btn")

    const signUpform = document.querySelector(".sign-up-container")


    signInform.style.display = "none"

    signUpButton.addEventListener('click', () => {
       signInform.style.display = 'none';
             signUpform.style.display = 'block' 
    });

     signInButton.addEventListener('click', () => {
               signInform.style.display = 'block';
             signUpform.style.display = 'none'

    });
////////////////////////////////////////////////////
// // validator.initialize();;
// const loginForm = document.querySelector("form");
// const handleLogin = (e) => {
//   e.preventDefault();
//   const formData = new FormData(loginForm).entries();
//   const { email, password } = Object.fromEntries(formData);
//   // console.log("keeeee");
//   const emailErrorMessage = validateEmail(email);
//   const passowrdErrorMessage = validatePassword(password, 6);

//   if (emailErrorMessage) {
//     // select the email form field message element
//     const emailErrorMessageElement = document.querySelector(
//       ".email.error-message"
//     );
//     // show email error message to user
//     emailErrorMessageElement.innerText = emailErrorMessage;
//   }

//   if (passowrdErrorMessage) {
//     // select the email form field message element
//     const passwordErrorMessageElement = document.querySelector(
//       ".password.error-message"
//     );
//     // show password error message to user
//     passwordErrorMessageElement.innerText = passowrdErrorMessage;
//   }
//   if ((emailErrorMessage === " ") & (passowrdErrorMessage === " ")) {
//     const loginCredentials = {
//       email,
//       password,
//     };
//     const saveCredentials = JSON.stringify(loginCredentials);
//     console.log(saveCredentials);
//     localStorage.setItem("loginCredentials", saveCredentials);
//     if (!localStorage.getItem("loginCredentials")) {
//       window.location.replace("https://richmunye.netlify.app/login.html");
//     }
//     window.location.replace("https://richmunye.netlify.app/admin/admin.html");
//   }
// };
// const validateEmail = (email) => {
//   if (!email.trim()) return "email is required";
//   const emailValidated = /\S+@\S+\.\S+/;
//   if (!emailValidated.test(email)) {
//     return "please enter a valid email";
//   }

//   return " ";
// };

// const validatePassword = (password, minLength) => {
//   if (!password) return "Password is required";
//   if (password.length < minLength) {
//     return `Please enter a password that's at least ${minLength} characters long`;
//   }

//   const hasCapitalLetter = /[A-Z]/g;
//   if (!hasCapitalLetter.test(password)) {
//     return "Please use at least one capital letter.";
//   }

//   const hasNumber = /\d/g;
//   if (!hasNumber.test(password)) {
//     return "Please use at least one number.";
//   }
//   location.href = "admin.html"
//   return " ";
// };

// const loginBtn = document.querySelector(".login-btn");
// loginBtn.addEventListener("click", handleLogin);

///////////////////////////////////////////////


const error3 = document.getElementById("error11")
const error4 = document.getElementById("error12")
const signinEmail = document.getElementById("email")
const signinPassword = document.getElementById("password")


signInbtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("TTTT");
  const user = JSON.stringify({email: signinEmail.value, password: signinPassword.value})
  if(signinEmail.value.length == 0){
    error3.innerHTML = "Please add your email" 
  }else if(signinEmail.value.length <5){
    error3.innerHTML = "Email is too short"
  }else if(signinPassword.value.length == 0){
    error4.innerHTML = "Please add the password"
    error3.innerHTML = ""
  }else{
    localStorage.setItem('user', user);
    location.href = "admin.html"
  }


  

})
/////////////////////////////////////////////////////////////
const names = document.querySelector("#name2")
const error = document.querySelector(".error-message")
const error1 = document.querySelector(".error-email")
const error2 = document.querySelector(".error-password")
const email = document.querySelector("#email2")
const password = document.querySelector("#password2")
signUpform.addEventListener('submit', (e) => {
  e.preventDefault()

  if(names.value.length == 0) {
    error.innerHTML = "Fill your name please"
  }
  else {
    error.innerHTML = ""
  }
  if(email.value.length == 0) {
    error1.innerHTML = "Fill your email please"
  }
  else {
    error1.innerHTML = ""
  }
  if(password.value.length == 0) {
    error2.innerHTML = "Fill your password please"
  }
  else {
    error2.innerHTML = ""
    localStorage.setItem('user', {'email':email,"password":password});
    
  }
})
