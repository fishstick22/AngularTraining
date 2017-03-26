"use strict";

angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(['$routeProvider', 
	function($routeProvider) {
	
		$routeProvider
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutController',
				controllerAs: 'vm',
				data: {
					customKey1: 'customValue1',
					customKey2: 'customValue2'
				}
			
			})
			.when('/welcome', {
				templateUrl: 'views/welcome.html',
				controller: 'WelcomeController',
				controllerAs: 'vm',
				data: {
					customKey3: 'customValue3',
					customKey4: 'customValue4'
				}
			})
			.otherwise({
				redirectTo: '/welcome'
			}
		);
	}
]);

angular.module('myApp').controller('AboutController', ['$route',
	function($route){
		this.details = 'Hello, from AboutController';
		this.data = $route.current.data;
	}
]);


angular.module('myApp').controller('WelcomeController', ['$route',
	function($route){
		this.details = 'Hello, from WelcomeController';
		this.data = $route.current.data;
	}
]);