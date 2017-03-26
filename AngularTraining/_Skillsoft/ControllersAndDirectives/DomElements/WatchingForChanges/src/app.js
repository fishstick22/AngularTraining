"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstThermometer', function(){
	
	console.log('tstThermometer');
	return {
		scope: {
			temperature: '@'
		},
		templateUrl: 'templates/thermometer.html',
		link: function(scope, element, attrs) {
			attrs.$observe('temperature', function(newValue){
				var temp = attrs.temperature;
				
				if (temp < 45) {
					console.log(temp +' is freezing');
					element.addClass('freezing');
					element.removeClass('normal');
					element.removeClass('hot');
				}else if (temp >= 45 && temp <= 85) {
					console.log(temp +' is normal');
					element.removeClass('freezing');
					element.addClass('normal');
					element.removeClass('hot');					
				} else {
					console.log(temp +' is hot');
					element.removeClass('freezing');
					element.removeClass('normal');
					element.addClass('hot');						
				}
			});
		}
	};
	
});



angular.module('myApp').controller('MainController', ['$scope', function($scope){
	
	console.log('MainController');
	
	this.currentTemperature = 78;
}]);




