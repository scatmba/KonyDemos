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
  frmDashboard.lblNotifNum.onTouchStart = function(){
    ShowNotificationForm();
  }
} 
function ShowNotificationForm()
{
  frmNotification.show();
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
}

function onRowClickSegMenuOptions(){
  var data = frmDashboard.segMenuOptions.selectedRowItems[0].lblMenuOptions;
  //alert(JSON.stringify(data))
  
    if(data=== "Logout"){
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