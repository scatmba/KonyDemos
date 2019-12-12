function initializeFrmLoginEvents(){
  frmLogin.btnLogIn.onClick = function(){
    onClickLoginBtn();
  }
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