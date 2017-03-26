"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstVehicleView', function(){
	
	console.log('tstVehicleView');
	
	return {
		scope: {
			year: '@',
			make: '@',
			model: '@',
			info: '@'
		},
		templateUrl: 'templates/vehicle.html',
		restrict: 'EA',
		controller: function($scope) {
			console.log('typeof(year): ', typeof($scope.year));
			console.log('typeof(make): ', typeof($scope.make));
			console.log('typeof(model): ', typeof($scope.model));
			console.log('typeof(info): ', typeof($scope.info));
		}
	};

});

angular.module('myApp').controller('MainController', ['$scope', function($scope){
	
	console.log('MainController');
	
	this.firstItemInfo = {
		horsePower: 255,
		gasoline: 'unleaded',
		doors: 4,
		price: 19999
	};
	
	this.secondItemInfo = {
		horsePower: 255,
		gasoline: 'unleaded',
		doors: 4,
		price: 24349
	};
	
}]);