'use strict';

angular
  .module('app' , [
    'ngRoute',
    'env',
    'app.root',
    'app.components',
    'app.middleware',
    'app.language',
    'app.routes',
    'home.controller',
    'header.controller',
  ])
