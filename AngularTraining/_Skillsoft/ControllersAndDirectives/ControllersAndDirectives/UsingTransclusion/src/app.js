"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstUserView', function(){
	
	console.log('tstUserView');
	return {
		scope: {
			item: '='
		},
		transclude: true,
		templateUrl: 'templates/user.html',
		restrict: 'EA'
	};
	
});


angular.module('myApp').controller('MainController', ['$scope', function($scope){
	
	console.log('MainController');
	
	this.user = {
			firstName: 'Jane',
			lastName: 'Smith'
	};
	
	this.helloMessage = 'Hello, from Angular.js';
	
}]);




