'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newpage', {
        templateUrl: 'app/newpage/newpage.html',
        controller: 'NewpageCtrl'
      });
  });
