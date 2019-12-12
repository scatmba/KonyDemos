//Type your code here
function paymentPreshow(){
  frmMakePayment.tbxCvv.text="";
  frmMakePayment.tbxOtp1.text="";
  frmMakePayment.tbxOtp2.text="";
   frmMakePayment.tbxOtp3.text="";
   frmMakePayment.tbxOtp4.text="";
  
  frmMakePayment.footers[0].btn1.setVisibility(false);
  frmMakePayment.footers[0].btn2.width="100%";
   frmMakePayment.footers[0].btn2.text="Make Payment";
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
    frmMakePayment.flxSMakePayment.setVisibility(false);
    frmMakePayment.flxSpaymentSuccessful.setVisibility(false);
    frmMakePayment.flxSotp.setVisibility(true);
     frmMakePayment.footers[0].btn1.setVisibility(false);
  frmMakePayment.footers[0].btn2.width="100%";
     frmMakePayment.footers[0].btn2.text="Confirm";
    frmMakePayment.tbxOtp1.text="";
  frmMakePayment.tbxOtp2.text="";
   frmMakePayment.tbxOtp3.text="";
   frmMakePayment.tbxOtp4.text="";
  }
  }
  else  if(btnText=="Confirm"){
    if(otp1!=="" && otp1!==undefined && otp2!=="" && otp2!==undefined && otp3!=="" && otp3!==undefined && otp4!=="" && otp4!==undefined)
      {
     frmMakePayment.flxSMakePayment.setVisibility(false);
     frmMakePayment.flxSotp.setVisibility(false);
    frmMakePayment.flxSpaymentSuccessful.setVisibility(true);
     frmMakePayment.footers[0].btn1.setVisibility(true);
      frmMakePayment.footers[0].btn1.width="50%";
      frmMakePayment.footers[0].btn2.width="50%";
     frmMakePayment.footers[0].btn1.text="Home";
     frmMakePayment.footers[0].btn2.text="Make Favorite";
  } 
}
}


function onClickBackArrow(){
  var btnText=frmMakePayment.footers[0].btn2.text; 
   if(btnText=="Make Favorite"){
    frmMakePayment.flxSMakePayment.setVisibility(false);
    frmMakePayment.flxSpaymentSuccessful.setVisibility(false);
    frmMakePayment.flxSotp.setVisibility(true);
     frmMakePayment.footers[0].btn1.setVisibility(false);
  frmMakePayment.footers[0].btn2.width="100%";
     frmMakePayment.footers[0].btn2.text="Confirm";
     frmMakePayment.tbxOtp1.text="";
      frmMakePayment.tbxOtp2.text="";
      frmMakePayment.tbxOtp3.text="";
      frmMakePayment.tbxOtp4.text="";
  }
  else  if(btnText=="Confirm"){
    
     frmMakePayment.flxSotp.setVisibility(false);
    frmMakePayment.flxSpaymentSuccessful.setVisibility(false);
     frmMakePayment.flxSMakePayment.setVisibility(true);
     frmMakePayment.footers[0].btn1.setVisibility(false);
     
      frmMakePayment.footers[0].btn2.width="100%";
     
     frmMakePayment.footers[0].btn2.text="Make Payment";
     frmMakePayment.tbxCvv.text="";
  } 
}