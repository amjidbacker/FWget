
var windowObjectReference;  
var strWindowFeatures = "menubar=no,location=yes,resizable=yes,scrollbars=yes,status=no,bookmarktoolbar=no,width=420,height=230";  
  
function openRequestedPopup()  
{  
  windowObjectReference = window.open("chrome://FWget/content/main_windows.xul", "FWget", strWindowFeatures);
  
}

