let loginForm = document.getElementById('loginForm');
let loginUserName = document.getElementById('loginUserName');
//let loginPasswordText = document.getElementById('loginPasswordText');
let loginPassword = document.getElementById('loginPassword');
let loginSubmitBtn = document.getElementById('loginSubmitBtn');

let registerFirstName = document.getElementById('registerFirstName');
let registerLastName = document.getElementById('registerLastName');
let registerUserName = document.getElementById('registerUserName');
let registerPassword = document.getElementById('registerPassword');
let registerConfirmPassword = document.getElementById('registerConfirmPassword');
let registerEmail = document.getElementById('registerEmail');
let registerPhoneNumber = document.getElementById('registerPhoneNumber');
let registerSubmitBtn = document.getElementById('registerSubmitBtn');

let registerLink = document.getElementById('registerLink');
let loginLink = document.getElementById('loginLink');

let main = document.getElementById('main');
let signInBtn = document.getElementById('signIn');
let signUpBtn = document.getElementById('signUp');

let users = [
  {
    username: "setu",
    password: "123"
  },
  {
    username: "lima",
    password: "1234"
  },
  {
    username: "ashiq",
    password: "12345"
  }
]

// One way toggle
// $('.message a').click(function(){
//   $('.lrAnimation').animate({height: "toggle", opacity: "toggle"}, "slow");
// });

// Another way for toggle
signUpBtn.addEventListener('click', function (e) {
  e.preventDefault();
  main.classList.add('right-panel-active');
})

signInBtn.addEventListener('click', function (e) {
  e.preventDefault();
  main.classList.remove('right-panel-active');
})

// **Login In or Sign In
loginSubmitBtn.addEventListener('click', function(e){
  e.preventDefault();

  //alert("It's working");

  let userName = loginUserName.value;
  let passWord = loginPassword.value;

  // Checking Inputs
  //alert("UserName: "+userName+", Password: "+passWord);
  //console.log("UserName: "+userName+", Password: "+passWord);

  // One way to check validation
  // for(i=0;i<users.length;i++){
  //   if(userName == users[i].username && passWord == users[i].password){
  //     console.log(userName+" is login Successful!");
  //     return;
  //   }
  // }
  // console.log("Incorrect username or password!");

  // Another way to check validation
  // username check empty fileds
  if(userName == ''){
    document.getElementById("loginUserNameText").innerHTML = "*Please fill the username field!";
    return;
  }
  // username should not start with _, & and Number
  let userNameSlice = userName.slice(0,1);
  if(userNameSlice == "_" || userNameSlice == "&" || userNameSlice.match(/[0-9]/g) != null){
    document.getElementById("loginUserNameText").innerHTML = "*Username should not start with _, & and number!";
    return;
  }
  // username length
  if(userName.length <= 4){
    document.getElementById("loginUserNameText").innerHTML = "*Username should be at least 4 characters";
    return;
  }

  // check password
  if(passWord == ''){
    document.getElementById("loginPasswordText").innerHTML = "*Please fill the password field!";
    return;
  }
  if(passWord.length < 6 || passWord.length > 12){
    alert("Password should be between 6 to 12 characters!");
    return;
  }

});

// Register or Sign Up
registerSubmitBtn.addEventListener('click', function(e) {
  e.preventDefault();

  let regFirstName = registerFirstName.value;
  let regLastName = registerLastName.value;
  let regUserName = registerUserName.value;
  let regPassword = registerPassword.value;
  let regConfirmPassword = registerConfirmPassword.value;
  let regEmail = registerEmail.value;
  let regPhoneNumber = registerPhoneNumber.value;

  // check Firstname
  if(regFirstName == ''){
      document.getElementById("registerFirstNameText").innerHTML = "*Please fill the firstname field!";
      return;
    }
  if(regFirstName.length < 2){
    document.getElementById("registerFirstNameText").innerHTML = "*Firstname should be at least 2 characters!";
    return;
  }
  let regFirstNameSlice = regFirstName.slice(0,1);
  if(regFirstNameSlice == "_" || regFirstNameSlice == "&" || regFirstNameSlice.match(/[0-9]/g) != null){
    document.getElementById("registerFirstNameText").innerHTML = "*Firstname should not start with _, & and numbers!";
    return;
  }

  // check lastname
  if(regLastName == ''){
      document.getElementById("registerLastNameText").innerHTML = "*Please fill the lastname field!";
      return;
    }
  if(regLastName.length < 3){
    document.getElementById("registerLastNameText").innerHTML = "*Firstname should be at least 3 characters!";
    return;
  }
  let regLastNameSlice = regLastName.slice(0,1);
  if(regLastNameSlice == "_" || regLastNameSlice == "&" || regLastNameSlice.match(/[0-9]/g) != null){
    document.getElementById("registerLastNameText").innerHTML = "*Lastname should not start with _, & and numbers!";
    return;
  }

  // check username
  if(regUserName == ''){
      document.getElementById("registerUserNameText").innerHTML = "*Please fill the username field!";
      return;
    }
  if(regUserName.length < 3){
    document.getElementById("registerUserNameText").innerHTML = "*Firstname should be at least 3 characters!";
    return;
  }
  let regUserNameSlice = regUserName.slice(0,1);
  if(regUserNameSlice == "_" || regUserNameSlice == "&" || regUserNameSlice.match(/[0-9]/g) != null){
    document.getElementById("registerUserNameText").innerHTML = "*Username should not start with _, & and numbers!";
    return;
  }
  if(!isNaN(regUserName)){
    document.getElementById("registerUserNameText").innerHTML = "*Only characters are allowed!";
    return;
  }

  // check password
  if(regPassword == ''){
      document.getElementById("registerPasswordText").innerHTML = "*Please fill the password field!";
      return;
    }
  if(regPassword.length < 6 || regPassword.length > 12){
    document.getElementById("registerPasswordText").innerHTML = "*Password should be between 6 to 12 characters!";
    return;
  }

  // check confirm password
  if(regConfirmPassword == ''){
      document.getElementById("registerConfirmPasswordText").innerHTML = "*Please fill the confirm password field!";
      return;
    }
  // if(regPassword.length < 6 || regPassword.length > 12){
  //   document.getElementById("registerPasswordText").innerHTML = "*Confirm Password should be between 6 to 12 characters!";
  //   return;
  // }
  if(regPassword != regConfirmPassword){
    document.getElementById("registerConfirmPasswordText").innerHTML = "*Password does not match!";
    return;
  }

  // check email
  if(regEmail == ''){
      document.getElementById("registerEmailText").innerHTML = "*Please fill the email field!";
      return;
    }
  if(regEmail.indexOf('@') <= 0){
    document.getElementById("registerEmailText").innerHTML = "*Email should not start with @!";
    return;
  }
  if((regEmail.charAt(regEmail.length - 4) != '.') && (regEmail.charAt(regEmail.length - 3) != '.')){
    document.getElementById("registerEmailText").innerHTML = "*Invalid position of '.' ";
    return;
  }

  // check phone number
  if(regPhoneNumber == ''){
      document.getElementById("registerPhoneNumberText").innerHTML = "*Please fill the phone number field!";
      return;
    }
  if(isNaN(regPhoneNumber)){
    document.getElementById("registerPhoneNumberText").innerHTML = "*Only numbers are allowed!";
    return;
  }
  if(regPhoneNumber.length != 11){
    document.getElementById("registerPhoneNumberText").innerHTML = "*Phone number should be 11 digits!";
    return;
  }
})
