"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', ['$scope', function($scope){
	
	console.log('MainController');
	
	$scope.bird = {
			name:	'bird'

	};
	
	$scope.horse = {
			name:	'horse'

	};
	
	$scope.snake = {
			name:	'snake'

	};
	
}]);

angular.module('myApp').controller('BirdController', ['$scope', function($scope) {
	$scope.state = 'waiting';
	$scope.move = function() {
		$scope.state = 'flying';
	}
}]);


angular.module('myApp').controller('HorseController', ['$scope', function($scope) {
	$scope.state = 'waiting';
	$scope.move = function() {
		$scope.state = 'galloping';
	}
}]);

angular.module('myApp').controller('SnakeController', ['$scope', function($scope) {
	$scope.state = 'waiting';
	$scope.move = function() {
		$scope.state = 'slithering';
	}
}]);
angular.module('myApp').directive('tstAnimalView', function(){
	
	console.log('tstAnimalView');
	return {
		scope: {
			item: '='
		},
		templateUrl: 'templates/animal.html',
		restrict: 'EA',
		controller: '@',
		name: 'controllerName'
	};
	
});

