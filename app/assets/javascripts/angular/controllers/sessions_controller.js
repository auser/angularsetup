angular.module('FantasyInsiders.controllers').controller('SessionsController', ['$scope', '$location', '$cookieStore', 'Session', function($scope, $location, $cookieStore, Session) {

  $scope.foo = function() {
    console.log("clicked foo..");
  }
  /*
  $scope.session = Session.userSession;


  $scope.create = function() {

    if ( Session.signedOut ) { 
      $scope.session.$save()
      .success(function(data, status, headers, config) {
        $cookieStore.put('_fantasy_insiders_user', data);
      }); 
    }   

  }; 

  $scope.destroy = function() {
    $scope.session.$destroy();
  };  
  */

}]);