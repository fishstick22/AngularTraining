"use strict";

angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(['$routeProvider', function($routeProvider) {
	
	$routeProvider
	.when('/product/:productId', {
		templateUrl: 'views/product.html',
		controller: 'ProductController',
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

angular.module('myApp').controller('ProductController', ['$routeParams',
	function($routeParams){
		console.log('ProductController');
		this.details = 'Hello from ProductController';
		this.productId = $routeParams.productId;
		console.log('ProductController, productId: ' +$routeParams.productId);
	}
]);

angular.module('myApp').controller('WelcomeController', [
	function(){
		this.details = 'hello from WelcomeController';
	}
]);

