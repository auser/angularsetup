angular.module('FantasyInsiders.services').service('Session',[ '$rootScope', '$cookieStore', 'UserSession', 'UserRegistration', function($rootScope, $cookieStore, UserSession, UserRegistration) {
  this.currentUser = $cookieStore.get('_fantasy_insiders_user');
  this.signedIn = !!$cookieStore.get('_fantasy_insiders_user');
  this.signedOut = !this.signedIn;
  this.userSession = new UserSession( { email:"foo@bar.com", password:"example", remember_me:true } );
  //this.userRegistration = new UserRegistration( { email:"foo-" + Math.floor((Math.random()*10000)+1) + "@bar.com", password:"example", password_confirmation:"example" } );

  $rootScope.$on('$routeChangeStart', function (current, next) {
	if (this.signedOut && next !== '/login') {
	 console.log("relocating user..");
		//$location('/login');
	}});

}]);
