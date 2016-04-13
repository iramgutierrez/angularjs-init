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
