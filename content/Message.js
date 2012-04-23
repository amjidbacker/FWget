
if ("undefined" == typeof(menuscript)) {
  var menuscript = {};
};


menuscript.BrowserOverlay = {
  menu : function(aEvent) {
    let stringBundle = document.getElementById("FWget-string-bundle");
    let message = stringBundle.getString("FWget.greeting.label");

    window.alert(message);
  }
};
