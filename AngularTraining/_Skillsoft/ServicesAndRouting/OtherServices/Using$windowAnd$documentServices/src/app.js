"use strict";

angular.module('myApp', []);


angular.module('myApp').controller('MainController', ['$window', '$document',
	function($window, $document){
	
		var vm = this;
		
		console.log('MainController');

		this.useWindowService = function() {
			$window.alert('Hello');
		};
		
		this.useDocService = function() {
			console.log($document);
			$document[0].bgColor = 'blue';
		}
	}
]);