"use strict";

angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(['$routeProvider', function($routeProvider) {
		
	$routeProvider
	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutController',
		controllerAs: 'vm'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactController',
		controllerAs: 'vm'
	})
	.when('/welcome', {
		templateUrl: 'views/welcome.html',
		controller: 'WelcomeController',
		controllerAs: 'vm'
	})
	.otherwise({
        template : "<h1>None</h1><p>Nothing has been selected</p>"
    });
	
}]);

//http://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working
//Due to aa077e8, the default hash-prefix used for $location hash-bang URLs has changed from the 
//empty string ('') to the bang ('!').
//If you actually want to have no hash-prefix, then you can restore the previous behavior by adding a 
//configuration block to your application:

//appModule.config(['$locationProvider', function($locationProvider) {
//	  $locationProvider.hashPrefix('');
//u92aqlf		}]);

// http://stackoverflow.com/questions/28015041/debug-route-provided-to-routeprovider
angular.module('myApp').run([
	  '$rootScope',
	  function($rootScope) {
	    // see what's going on when the route tries to change
	    $rootScope.$on('$routeChangeStart', function(event, next, current) {
	      // next is an object that is the route that we are starting to go to
	      // current is an object that is the route where we are currently
	      //var currentPath = current.originalPath;
	      //var nextPath = next.originalPath;

	      //console.log('Starting to leave %s to go to %s', currentPath, nextPath);
	    	if(current){
	    		console.log('current of $routeChangeStart is: ' + current.originalPath);
	    	}else console.log('current of $routeChangeStart is undefined');
	    	
	    	if(next){
	    		console.log('next of $routeChangeStart is: ' + next.originalPath);
	    	}else console.log('next of $routeChangeStart is undefined');
	    });
	  }
	]);

angular.module('myApp').controller('AboutController', [function(){
	this.details = 'Hello, from AboutController';
}]);

angular.module('myApp').controller('ContactController', [function(){
	this.details = 'Hello, from ContactController';
}]);

angular.module('myApp').controller('WelcomeController', [function(){
	this.details = 'Hello, from WelcomeController';
}]);