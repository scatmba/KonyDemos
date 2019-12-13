//Type your code here
function paymentPreshow(){
  frmMakePayment.tbxCvv.text="";
  frmMakePayment.tbxOtp1.text="";
  frmMakePayment.tbxOtp2.text="";
  frmMakePayment.tbxOtp3.text="";
  frmMakePayment.tbxOtp4.text="";
  frmMakePayment.flxSMakePayment.setVisibility(true);
  frmMakePayment.flxSotp.setVisibility(false);
  frmMakePayment.flxSpaymentSuccessful.setVisibility(false);
  frmMakePayment.footers[0].btn1.setVisibility(false);
  frmMakePayment.footers[0].btn2.width="100%";
  frmMakePayment.footers[0].btn2.text="Make Payment";
  frmMakePayment.headers[0].lblTitle.text="Make Payment";
  frmMakePayment.footers[0].btn2.setEnabled(false);
}


function onDoneCvv(){
  frmMakePayment.footers[0].btn2.setEnabled(true);
  var len=frmMakePayment.tbxCvv.text.length;
  if(len=="3"){
    frmMakePayment.tbxCvv.setFocus(false);
  }
}

function onDoneOtp1(){
  frmMakePayment.tbxOtp2.setFocus(true);
}
function onDoneOtp2(){
  frmMakePayment.tbxOtp3.setFocus(true);
}
function onDoneOtp3(){
  frmMakePayment.tbxOtp4.setFocus(true);
}
function onDoneOtp4(){
  frmMakePayment.footers[0].btn2.setEnabled(true);
   var len=frmMakePayment.tbxOtp4.text.length;
  if(len=="1"){
    frmMakePayment.tbxOtp4.setFocus(false);
}
}

function onClickButton2(){
  var btnText=frmMakePayment.footers[0].btn2.text;
  var cvv=frmMakePayment.tbxCvv.text;
  var otp1=frmMakePayment.tbxOtp1.text;
  var otp2=frmMakePayment.tbxOtp2.text;
  var otp3=frmMakePayment.tbxOtp3.text;
  var otp4=frmMakePayment.tbxOtp4.text;
  if(btnText=="Make Payment"){
    if(cvv!=="" && cvv!==undefined)
    {
       kony.timer.cancel("countdown");
      frmMakePayment.lblTimer.text = "60";
      frmMakePayment.flxSMakePayment.setVisibility(false);
      frmMakePayment.flxSpaymentSuccessful.setVisibility(false);
      frmMakePayment.flxSotp.setVisibility(true);
      frmMakePayment.footers[0].btn1.setVisibility(false);
      frmMakePayment.footers[0].btn2.width="100%";
      frmMakePayment.footers[0].btn2.text="Confirm";
      frmMakePayment.headers[0].lblTitle.text="Confirm OTP";
      frmMakePayment.footers[0].btn2.setEnabled(false);
      
      startTimer();
      frmMakePayment.tbxOtp1.text="";
      frmMakePayment.tbxOtp2.text="";
      frmMakePayment.tbxOtp3.text="";
      frmMakePayment.tbxOtp4.text="";
    }
  }
  else  if(btnText=="Confirm"){
    if(otp1!=="" && otp1!==undefined && otp2!=="" && otp2!==undefined && otp3!=="" && otp3!==undefined && otp4!=="" && otp4!==undefined)
    {
      kony.timer.cancel("countdown");
      frmMakePayment.flxSMakePayment.setVisibility(false);
      frmMakePayment.flxSotp.setVisibility(false);
      frmMakePayment.flxSpaymentSuccessful.setVisibility(true);
      frmMakePayment.footers[0].btn1.setVisibility(true);
      frmMakePayment.footers[0].btn1.width="50%";
      frmMakePayment.footers[0].btn2.width="50%";
      frmMakePayment.footers[0].btn1.text="Home";
      frmMakePayment.footers[0].btn2.text="Make Favorite";
      frmMakePayment.headers[0].lblTitle.text="Payment Confirmation";
      frmMakePayment.headers[0].imgBackArrow.setVisibility(false);
       frmMakePayment.headers[0].lblTitle.left="20%";
      frmMakePayment.footers[0].btn2.setEnabled(false);
    } 
  }
}


function onClickBackArrow(){
  var btnText=frmMakePayment.footers[0].btn2.text; 

  if(btnText=="Confirm"){
    kony.timer.cancel("countdown");
    frmMakePayment.flxSotp.setVisibility(false);
    frmMakePayment.flxSpaymentSuccessful.setVisibility(false);
    frmMakePayment.flxSMakePayment.setVisibility(true);
    frmMakePayment.footers[0].btn1.setVisibility(false);

    frmMakePayment.footers[0].btn2.width="100%";

    frmMakePayment.footers[0].btn2.text="Make Payment";
     frmMakePayment.footers[0].btn2.setEnabled(false);
    frmMakePayment.headers[0].lblTitle.text="Make Payment";
    frmMakePayment.tbxCvv.text="";
  } 
  else  if(btnText=="Make Payment"){
    frmDashboard.show();
  }
}

function onClickBtn1(){
  frmDashboard.show();
}



function startTimer()
{
  kony.timer.schedule("countdown", changeTime, 1, true);
  kony.print("Timer is set");
}

function changeTime(){
  kony.print("Timer is called");
  var timerCheck = parseInt(frmMakePayment.lblTimer.text);
  timerCheck = timerCheck -1;
  if(timerCheck === 0 )
  {
    kony.timer.cancel("countdown");
  }
  frmMakePayment.lblTimer.text = timerCheck.toFixed();
}









