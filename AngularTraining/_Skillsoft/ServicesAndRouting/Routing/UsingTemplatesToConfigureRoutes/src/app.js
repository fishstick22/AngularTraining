"use strict";

angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(['$routeProvider', 
	function($routeProvider) {
	
		$routeProvider
			.when('/welcome', {
				template: '<h3>Welcome</h3><p>{{vm.details}}</p>',
				controller: 'WelcomeController',
				controllerAs: 'vm'
			})
			.when('/about', {
				template: '<h3>About Us</h3><p>{{vm.details}}</p>',
				controller: 'AboutController',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/welcome'
			}
		);
	}
]);

angular.module('myApp').controller('AboutController', [
	function(){
		this.details = 'Hello, from AboutController';
		
	}
]);


angular.module('myApp').controller('WelcomeController', [
	function(){
		this.details = 'Hello, from WelcomeController';
		
	}
]);