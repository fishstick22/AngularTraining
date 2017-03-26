"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstGenerateNumbers', function(){
	
	console.log('tstGenerateNumbers');
	return {
		scope: {
			generatorFunction: '&',
			onSave: '&',
			count:'=?'
		},
		templateUrl: 'templates/number-gen.html',
		restrict: 'E',
		controller: function($scope) {
			
			if($scope.generatorFunction) {
				$scope.items = $scope.generatorFunction({count:$scope.count});
			}
			
			$scope._onSave = function() {
				console.log('tstGenerateNumbers scope is ' + $scope.onSave);
				if($scope.onSave) {
					console.log('tstGenerateNumbers $scope.onSave true');
					$scope.onSave();
				}else console.log('tstGenerateNumbers nope...');
			};
		}
	};
});

angular.module('myApp').controller('MainController', ['$scope', function($scope){
	
	console.log('MainController');
	
	this.randomNumbers = function(count) {
		
		var results = [];
		count=count || 10;
		for (var counter = 0; counter < count; counter++) {
			var item = Math.round(Math.random() * 1000) +1;
			results.push(item);
		}
		return results;
	};

	this.sequentialNumbers = function(count) {
		
		var results = [];
		count=count || 10;
		for (var counter = 1; counter <= count; counter++) {
			results.push(counter);
		}
		return results;
	};
	
	this.saveFirst = function() {
		console.log('MainController The first item is saved!!');
		alert('The first item is saved!!');
	};
	
	this.saveSecond = function() {
		console.log('MainController The second item is saved!!');
		alert('The second item is saved!!');
	};
	
}]);