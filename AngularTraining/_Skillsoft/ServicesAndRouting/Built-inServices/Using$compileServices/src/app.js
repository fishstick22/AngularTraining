"use strict";

angular.module('myApp', []);


angular.module('myApp').controller('MainController', ['$scope',  '$compile',
	function($scope, $compile){
	
		this.addNewField = function(htmlMarkup){
			console.log('MainController.addNewField('+htmlMarkup+')');
			var newElement = $compile(htmlMarkup)($scope);
			var parentElement = angular.element('#myDiv');
			parentElement.append(newElement);
		};

	}
]);