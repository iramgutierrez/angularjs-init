'use strict';

angular
  .module('app' , [
    'ngRoute',
    'ngResource',
    'env',
    'app.root',
    'app.components',
    'app.middleware',
    'app.language',
    'app.routes',
    'header.controller',
    'page.title.controller',
    'home.controller',
    'teams.controllers',
    'list.controller',
    'team.entity'
  ])
