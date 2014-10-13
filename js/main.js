'use strict';

angular.module('shockUtilies', [
  'ngRoute'
])
.value('ROOT', __dirname + '/')
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});