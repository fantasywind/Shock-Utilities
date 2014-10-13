angular.module('shockUtilies')
.controller('MainCtrl', function ($scope, JSXService) {
  var csi = new CSInterface();

  $scope.generate = function () {
    csi.evalScript("alert('open template')");
    JSXService.openTemplate('Template_1_Left.indd');
  }
})