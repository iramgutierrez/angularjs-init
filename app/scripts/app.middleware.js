angular
  .module('app.middleware' , [])
  .provider('auth', function() {

      this.$get = [ "$q" , "$timeout", function($q , $timeout) {

          var deferred = $q.defer();

          // TODO Auth
          $timeout(function(){
            deferred.resolve(true);
          } , 200);

          return deferred.promise;

      }];
  })
