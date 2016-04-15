angular
  .module('app.middleware' , [])
  .provider('auth', function() {

      this.$get = [ "$q" , "$timeout", function($q , $timeout) {

          var deferred = $q.defer();

          // TODO Auth
          $timeout(function(){
            deferred.resolve(true);
          } , 100);

          return deferred.promise;

      }];
  })
