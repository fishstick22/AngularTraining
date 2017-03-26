"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstHotArea', function(){
	
	console.log('tstVehicleView');
	return function($scope, element, attrs) {
			element.bind('mouseover', function() {
				element.addClass('area-on');
			});
			element.bind('mouseout', function() {
				element.removeClass('area-on');
			});
		};// shorthand for return {link: function() {} };

	
});

angular.module('myApp').controller('MainController', ['$scope', function($scope){
	
	console.log('MainController');

	
}]);