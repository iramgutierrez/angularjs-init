'use strict';

angular
  .module('teams.controllers' , [])
  .controller('TeamIndexController' , function($scope , Team){

    $scope.data = [];
    $scope.entity = 'teams';

    Team.query()
      .$promise.then(
                function(teams)
                {
                    $scope.data = teams;
                },
                function(err)
                {
                  console.log(err)
                }
            )

  })
  .controller('TeamShowController' , function($scope , Team , $routeParams , $location){
    Team.get({id : $routeParams.id})
      .$promise.then(
                function(team)
                {
                    $scope.team = team;

                    $scope.data = team.members;
                },
                function(err)
                {
                  $location.path('teams');
                }
            )
  })
