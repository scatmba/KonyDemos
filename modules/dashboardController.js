function initializefrmDashboardEvents(){
  frmDashboard.flxHamMenuIcon.onTouchStart = function(){
    onclickOfHamMenuIcon();
  }
  frmDashboard.imgHamMenuClose.onTouchStart = function(){
    dismissHamMenu();
  }
} 

function onclickOfHamMenuIcon(){
  frmDashboard.flxMenu.setVisibility(true);
}

function dismissHamMenu(){
  frmDashboard.flxMenu.setVisibility(false);
}

