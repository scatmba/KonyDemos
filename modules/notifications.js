//Type your code here


function imgBackNavigations()
{
  var frmPrv =kony.application.getCurrentForm().id;
  kony.print("Previous form:" +frmPrv);
  switch(frmPrv)
    {
      case "frmNotification": frmDashboard.show();
        break;
      
      case "frmNotificationDetails": frmNotification.show();
        break;
      
    }
 
}
function showNotifDetailsForm()
{
 
  
  frmNotificationDetails.show();
}

function preshowFrmNotification()
{
  var data1 = { 
    "lblBillDue":{"text" : "Bill Due","skin":"sknlblviolet120"},
    "flxRoundEnable" :{"skin":"sknflxroundViolet"},
    "imgNotificationEnable" : {"src" : "notificationblue.png"},
    "lblTime":{"text" : "6:57AM","skin" : "sknlblviolet90"},
    "lblMessage":{"text" : "Hi! Bill dated 27-Nov-19 for Rs 1567.67 for your Consumer","skin" : "sknlblBlack110"},
    
  };
  var data2 = {
   "flxEnable" :{"skin":"sknflxbggrey"},
     "lblBillDue":{"text" : "Bill Due","skin":"sknlblGrey120"},
    "flxRoundEnable" :{"skin":"sknflxroundGrey"},
        "imgNotificationEnable" : {"src" : "notificationgrey.png"},
     "lblTime":{"text" : "6:57AM","skin" : "sknlblGrey90"},  
    "lblMessage" : {"text" : "Hi! Bill dated 27-Nov-19 for Rs 1567.67 for your Consumer","skin" : "sknlblGreydark100"},
  };
  var segLength = frmNotification.segmentNotification.data.length;
  for(i=0;i<segLength;i++){
    if(i===0 || i===1){
      frmNotification.segmentNotification.setDataAt(data1, i, 0);
    }else{
         frmNotification.segmentNotification.setDataAt(data2, i, 0);
      }
  }
}