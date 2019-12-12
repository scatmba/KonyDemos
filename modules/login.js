function initializeFrmLoginEvents(){
  frmLogin.btnLogIn.onClick = function(){
    onClickLoginBtn();
  };
  frmLogin.btnSgnin.onClick = signIn;
  frmLogin.btnSignUp.onClick = signup;
}

function signIn(){
  frmLogin.flxInner.setVisibility(true);
  frmLogin.flxInner2.setVisibility(false);
  frmLogin.btnSgnin.skin = "sknbtnviolet";
    frmLogin.line1.skin="sknlblviolet";
   frmLogin.btnSignUp.skin = "sknbtncontentgrey";
  frmLogin.line2.skin="sknlblGreyline";
}

function signup()
{
  frmLogin.btnSignUp.skin = "sknbtnviolet";
  frmLogin.line2.skin="sknlblviolet";
   frmLogin.btnSgnin.skin = "sknbtncontentgrey";
    frmLogin.line1.skin="sknlblGreyline";
 frmLogin.flxInner.setVisibility(false);
  frmLogin.flxInner2.setVisibility(true); 
}
function onClickLoginBtn(){
  if(frmLogin.tbxUsername.text === ""){
    alert("Please enter valid username")
  }else if(frmLogin.tbxPassword.text === ""){
    alert("Please enter valid password")
  }else{
    frmDashboard.show();
  }
}