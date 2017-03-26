"use strict";

angular.module('myApp', []);


angular.module('myApp').controller('MainController', ['$location', '$anchorScroll', 
	function($location, $anchorScroll){
		console.log('MainController');
		this.jumpToTop = function() {
			$location.hash('topLink');
			$anchorScroll();
		};

		this.jumpToBottom = function() {
			$location.hash('bottomLink');
			$anchorScroll();
		};
	}
]);