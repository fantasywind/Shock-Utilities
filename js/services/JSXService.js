angular.module('shockUtilies')
.service('JSXService', function (ROOT) {
  var csi = new CSInterface()
  var TEMPLATE_ROOT = ROOT + 'templates/'

  this.openTemplate = function (templateName) {
    csi.evalScript('openTemplate("' + TEMPLATE_ROOT + templateName + '");');
  }
});