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

  }])
