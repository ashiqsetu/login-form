let loginForm = document.getElementById('loginForm');
let loginUserName = document.getElementById('loginUserName');
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

// Login In or Sign In
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
  // check empty fileds
  if(userName == '' || passWord == ''){
    alert("Both fields shoould not be blank!");
    return;
  }
  // username should not start with _, & and Number
  let userNameSlice = userName.slice(0,1);
  if(userNameSlice == "_" || userNameSlice == "&" || userNameSlice.match(/[0-9]/g) != null){
    alert("Username should not start with _, & and number!");
    return;
  }
  // check size of password
  if(passWord.length < 6 || passWord.length > 12){
    alert("Password should be between 6 to 12 characters!");
    return;
  }

});

// Register or Sign Up
// registerLink.addEventListener('click', function() {
//   loginForm.animate({height: "toggle", opacity: ""})
// });
