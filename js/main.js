'use strict';

angular.module('shockUtilies', [
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.controller('MainCtrl', function ($scope) {
  console.log('MainCtrl')
})