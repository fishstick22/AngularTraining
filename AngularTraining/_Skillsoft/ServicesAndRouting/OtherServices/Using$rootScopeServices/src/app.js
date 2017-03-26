"use strict";

angular.module('myApp', []);

angular.module('myApp').run(
	function($rootScope){
		
		$rootScope.baseValue = 'This value is saved on the top-level scope';
		$rootScope.sayHello = function() {
			alert('Hello, from AngularJS');
		}
	}
);

angular.module('myApp').controller('MainController', ['$scope', 
	function($scope){
	
		var vm = this;
		
		console.log('MainController');

	}
]);