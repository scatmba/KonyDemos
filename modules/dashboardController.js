function initializefrmDashboardEvents(){
  frmDashboard.preShow = function(){
    preShowFrmDashboard();
  }
  frmDashboard.postShow = function(){
    postShowFrmDashboard();
  }
  frmDashboard.flxHamMenuIcon.onTouchStart = function(){
    onclickOfHamMenuIcon();
  }
  frmDashboard.imgHamMenuClose.onTouchStart = function(){
    dismissHamMenu();
  }
  frmDashboard.segMenuOptions.onRowClick = function(){
    onRowClickSegMenuOptions();
  }
  frmDashboard.imgClose.onTouchStart = function(){
    dismissPopup();
  }
  frmDashboard.btnPayNowOrSeeDetails.onClick = function(){
    onClickPayNowOrSeeDetails();
  }
  frmDashboard.lstBoxLanguages.onSelection = chooseLanguage;​
} 

function onclickOfHamMenuIcon(){
  frmDashboard.flxMenu.setVisibility(true);
  frmDashboard.enableScrolling = false;
  frmDashboard.flxScrollMain.enableScrolling = false;
}

function dismissHamMenu(){
  frmDashboard.flxMenu.setVisibility(false);
  frmDashboard.enableScrolling = true;
  frmDashboard.flxScrollMain.enableScrolling = true;
}

function postShowFrmDashboard(){
  frmDashboard.lblNotif.text = "Alert!";
  frmDashboard.btnRemindMe.setVisibility(false);
  frmDashboard.btnPayNowOrSeeDetails.width = "100%";
  frmDashboard.btnPayNowOrSeeDetails.left = "0dp";
  frmDashboard.btnPayNowOrSeeDetails.text = "See Details"
  frmDashboard.enableScrolling = false;
  frmDashboard.flxScrollMain.enableScrolling = false;
  frmDashboard.flxPopup.setVisibility(true);  
  //var enLocaledata = JSON.stringify()
}

function onRowClickSegMenuOptions(){
  var data = frmDashboard.segMenuOptions.selectedRowItems[0].lblMenuOptions;
  //alert(JSON.stringify(data))
    if(data === "Logout"){
       frmLogin.tbxUsername.text = "";
      frmLogin.tbxPassword.text = "";
       frmLogin.tbxName.text = "";
      frmLogin.tbxCustId.text = "";
     frmLogin.tbxMobNo.text = "";
     frmLogin.tbxEmailId.text = "";
      frmLogin.tbxNationId.text = "";
      frmLogin.tbxNationalNumber.text = "";
      
   signIn();

      frmLogin.show();
    }else if(data === "Bill Pay"){
      frmMakePayment.show();
    }
  
}

function dismissPopup(){
  frmDashboard.enableScrolling = true;
  frmDashboard.flxScrollMain.enableScrolling = true;
  frmDashboard.flxPopup.setVisibility(false);
}

function onClickPayNowOrSeeDetails(){
  frmAlertDetails.show();
}
function preShowFrmDashboard(){
  frmDashboard.flxMenu.setVisibility(false);
  frmDashboard.flxPopup.setVisibility(false);
  frmDashboard.enableScrolling = true;
  frmDashboard.flxScrollMain.enableScrolling = true;
}

function chooseLanguage()
{
  var language = frmDashboard.lstBoxLanguages.selectedKeyValue[1];  
  if(language === "EN")
    {
      kony.i18n.setCurrentLocaleAsync("en_US", onsuccesscallback, onfailurecallback,"");
      destroyPages();
    }
  else
    {
      kony.i18n.setCurrentLocaleAsync("hi_IN", onsuccesscallback, onfailurecallback,"");
      destroyPages();
    }
  
}

function onsuccesscallback(oldlocalename, newlocalename){
  frmDashboard.lblWelcomeText.text = kony.i18n.getLocalizedString("welcometext");
  frmLogin.btnLogIn.text = kony.i18n.getLocalizedString("logintext");
  frmDashboard.lblTotalOutstText.text = kony.i18n.getLocalizedString("totalOutstanding");
  frmDashboard.lblCustIDText.text = kony.i18n.getLocalizedString("customerID");
  frmDashboard.lblDueDateText.text = kony.i18n.getLocalizedString("dueDate");
}

function onfailurecallback(errCode, errMsg){
  alert(errCode +" "+errMsg)
}

function destroyPages(){
  frmDashboard.forceLayout();
  frmLogin.forceLayout();
}​