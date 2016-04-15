'use strict'

angular
  .module('list.controller' , [])
  .controller('ListController' , function($scope){
    
    $scope.active_id;

    $scope.active = function(key)
    {
        if(angular.isDefined($scope.data[key]))
        {
            $scope.active_id = key;
        }
    }

    $scope.isActive = function(id)
    {
      return id == $scope.active_id;

    }
  })
