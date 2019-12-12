function initializeFrmAlertDetailsEvents(){
  frmAlertDetails.imgClose.onTouchStart = function(){
    navigateToFrmDashboard();
  }
}

function navigateToFrmDashboard(){
  frmDashboard.show();
}