'use strict';

angular
  .module('app.routes' , [])
  .config(['$routeProvider' ,'authProvider' , 'getLanguageProvider', function ($routeProvider, authProvider , getLanguageProvider) {

    var authProvider = authProvider.$get;
    var languageProvider = getLanguageProvider.$get;

    $routeProvider
        .when('/', {
          templateUrl: 'app/views/home/template.html',
          controller : 'HomeController',
          resolve : {
            auth : authProvider,
            language : languageProvider
          }
        })
        .when('/teams', {
          templateUrl: 'app/views/teams/index/template.html',
          controller : 'TeamIndexController',
          resolve : {
            auth : authProvider,
            language : languageProvider
          }
        })
        .when('/teams/:id', {
          templateUrl: 'app/views/teams/show/template.html',
          controller : 'TeamShowController',
          resolve : {
            auth : authProvider,
            language : languageProvider
          }
        })

  }])
