(function () {
  var fs = require('fs');
  var path = require('path');
  var menuUri = path.resolve(__dirname, "partials/menu.xml")
  var menuContent = fs.readFileSync(menuUri).toString();
  var csi = new CSInterface();

  csi.setPanelFlyoutMenu(menuContent);

}).bind(this)();