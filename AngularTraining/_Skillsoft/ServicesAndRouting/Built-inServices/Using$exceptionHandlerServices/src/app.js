"use strict";

angular.module('myApp', []);

angular.module('myApp').factory('$exceptionHandler',  
	function(){
	
		return function(exception, cause) {
			alert('Oops, an error occurred!');
			console.log('Oops, an error occurred!' + exception);
		}
	}
);

angular.module('myApp').controller('MainController', ['$cacheFactory', 
	function($cacheFactory){
	
		var vm = this;
		
		console.log('MainController');

		this.throwError = function() {
			throw new Error('This is a sample exception');
		}
	
	}
]);