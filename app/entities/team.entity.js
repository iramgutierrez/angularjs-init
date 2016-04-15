'use strict';

angular
  .module('team.entity' , [])
  .factory('Team', function ($resource , env) {

        return $resource(env.backend+'teams/:id',
            {id: '@_id'},
            {
                all: {
                    isArray: true
                },
                query: {
                    isArray: true
                },
                get: {
                    isArray: false
                },
                update: {
                    method: 'PUT'
                }

            }
        );
    })
