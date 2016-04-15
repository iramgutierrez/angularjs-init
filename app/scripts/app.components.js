'use strict';

angular
  .module('app.components' , [])
  .directive('headerApp', function () {
      return {
          restrict: 'E',
          scope: '&',
          templateUrl: 'app/components/header-app/template.html',
          controller : 'HeaderController'
      };
  })
  .directive('pageTitle', function () {
      return {
          restrict: 'E',
          scope: {
            title : "@"
          },
          templateUrl: 'app/components/page-title/template.html',
          controller : 'PageTitleController'
      };
  })
  .directive('list', function () {
        return {
            restrict: 'E',
            scope: "&",
            templateUrl: 'app/components/list/template.html',
            controller : 'ListController'
        };
    })
