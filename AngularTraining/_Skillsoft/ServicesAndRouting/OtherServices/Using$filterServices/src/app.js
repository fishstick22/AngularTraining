"use strict";

angular.module('myApp', []);

angular.module('myApp').filter('dashes',
	function() {
		
		return function(value) {
			value = value.replace(/\s/g, '-');
			return value;
		}
	}
);

angular.module('myApp').controller('MainController', ['$filter',
	function($filter){
	
		var vm = this;
		var dashFilter = $filter('dashes');
		
		console.log('MainController');
		
		this.firstValue = 'This is a test of the filter service';
		this.secondValue = dashFilter('This is a second test of the filter added in the controller');

		this.thirdValue = '';
		
		this.applyFilter = function() {
			this.thirdValue = dashFilter(this.inputValue);
		}
	}
]);