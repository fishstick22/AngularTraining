"use strict";

angular.module('myApp', []);


angular.module('myApp').controller('MainController', ['$parse', 
	function($parse){
	
		var vm = this;
		
		vm.executeMultiply = function() {
			
			var part = {part:{id: '175446'}};
			var multiply = $parse('8 * 5');
			var getId = $parse('part.id');
			
			vm.results = multiply();
			vm.idOfPart = getId(part);
		}

	}
]);