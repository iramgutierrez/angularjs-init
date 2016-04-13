'use strict'

angular.module('app.language' , [])
    .provider('getLanguage', function() {

        this.$get = [ "$timeout" , "env", "$q" , "$location" , "$rootScope" , "$http",  function($timeout , env , $q , $location , $rootScope , $http) {

            var deferred = $q.defer();
            if(angular.isDefined($rootScope.lang))
            {
                $rootScope.load = true;
                deferred.resolve();
            }
            else
            {

                var locale = env.locale || false;

                if(!locale)
                {

                    $rootScope.load = true;
                    deferred.resolve();
                }


                $http.get('app/lang/'+locale+'.json')
                    .success(function(language){
                        $rootScope.lang = language;

                        $rootScope.load = true;

                        deferred.resolve();
                    })
                    .error(function(err){
                        console.log('not found')
                        $rootScope.load = true;
                        deferred.resolve();

                    })

            }

            return deferred.promise;

        }];
    })
    .factory('language' , ['$http' ,'$q'  , '$rootScope', function($http , $q , $rootScope){

        function get(input) {

            if($rootScope.hasOwnProperty('lang'))
            {

                if ($rootScope.lang.hasOwnProperty(input)) {

                    input = $rootScope.lang[input]
                }

            }

            return input;


        }

        return {
            get : get
        }

    }])
    .filter('language', function (language) {
            return function(input, capitalize) {

                var input = input || '';

                var translated = language.get(input);
                
                var capitalize = capitalize || false;

                if (capitalize) {
                    return translated.toLowerCase().substring(0, 1).toUpperCase() + translated.substring(1);
                }

                return translated;

            }

    })
