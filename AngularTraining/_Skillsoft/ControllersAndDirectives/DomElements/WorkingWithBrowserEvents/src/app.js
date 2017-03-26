"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstRollover', function(){
	
	console.log('tstRollover');
	return {
		scope: {
			label: '@'
		},
		templateUrl: 'templates/test-rollover.html',
		replace: true,
		link:  function(scope, element, attrs) {
			
			var originalColor = element.css('background-color');
			
			element.bind('mouseover', function() {
				element.css('background-color', attrs.activeColor);
			});
			
			element.bind('mouseout', function() {
				element.css('background-color', originalColor);
			});
		}
	};
	
});



angular.module('myApp').controller('MainController', ['$scope', function($scope){
	
	console.log('MainController');
	

}]);




