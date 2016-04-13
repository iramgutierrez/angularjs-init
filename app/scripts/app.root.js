'use strict';

angular
  .module('app.root' , [])
  .run(function($rootScope) {

    $rootScope.load = false;

  })
