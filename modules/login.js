function initializeFrmLoginEvents(){
  frmLogin.btnLogIn.onClick = function(){
    onClickLoginBtn();
  }
  frmLogin.tbxNationalNumber.onDone = onDoneNationId;
  frmLogin.btnSihnin.onClick = signIn;
  frmLogin.btnSignUp.onClick = signUp;
}

function signIn()
{
  frmLogin.flxInner.setVisibility(true);
  frmLogin.flxInner2.setVisibility(false);
  frmLogin.btnSihnin.skin = "sknbtnviolet";
  frmLogin.line1.skin = "sknlblviolet";
  frmLogin.btnSignUp.skin = "sknbtncontentgrey";
  frmLogin.line2.skin = "sknlblGreyline";
  frmLogin.btnLogIn.text = "Log in";
  frmLogin.btnLogIn.skin = "sknbtnVoiletBg";
   frmLogin.btnLogIn.setEnabled(true);
  
  
}

function signUp()
{
  frmLogin.flxInner.setVisibility(false);
  frmLogin.flxInner2.setVisibility(true);
  frmLogin.btnSihnin.skin = "sknbtncontentgrey";
  frmLogin.line1.skin = "sknlblGreyline";
  frmLogin.btnSignUp.skin = "sknbtnviolet";
  frmLogin.line2.skin = "sknlblviolet";
    frmLogin.btnLogIn.text = "Sign up";
  frmLogin.btnLogIn.skin = "sknbtnDisable";
  frmLogin.btnLogIn.setEnabled(false);
}

function onClickLoginBtn(){
  
  var text = frmLogin.btnLogIn.text;
  if(text == "Log in")
  {
      var username = frmLogin.tbxUsername.text;
      var password = frmLogin.tbxPassword.text;
		
     if(username === "" || password === ""){
       alert("username/password should not be empty");
     }else if(username !== "admin" || password !=="admin@123"){
       alert("please enter valid username/password");
     }else{
       frmDashboard.show();
     }
//       if((username === "" && password === "") || (username !== "admin" && password !=="admin@123")){
//        alert("please enter valid username/password");
//       }else{
//         frmDashboard.show();
//       }
  }
  else
    {
      frmDashboard.show();
    }
 
}

function onDoneNationId()
{
  
    var name=frmLogin.tbxName.text;
      var custId = frmLogin.tbxCustId.text;
      var mobno = frmLogin.tbxMobNo.text;
      var EmailId = frmLogin.tbxEmailId.text;
      var NationId = frmLogin.tbxNationId.text;
  var NationNum = frmLogin.tbxNationalNumber.text;
  
   if(name !== "" && custId !== "" && mobno !== "" && EmailId !== "" && NationId !== "" && NationNum !== "")
    { 
  frmLogin.btnLogIn.skin = "sknbtnVoiletBg";
  frmLogin.btnLogIn.setEnabled(true);
    }
}