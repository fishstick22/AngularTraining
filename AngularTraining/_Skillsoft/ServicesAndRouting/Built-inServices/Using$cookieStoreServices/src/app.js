"use strict";

angular.module('myApp', ['ngCookies']);


angular.module('myApp').controller('MainController', ['$cookies', 
	function($cookies){
	
		var vm = this;
		
		console.log('MainController');

		vm.keys = [];
		
		vm.addItem = function(itemKey, itemValue) {
			console.log('MainController.addItem('+itemKey+', ' +itemValue +')');
			vm.keys.push(itemKey);
			$cookies.put(itemKey, itemValue);
		};
		
		vm.getItem = function(itemKey) {
			vm.currentItem = $cookies.get(itemKey);
		};

		vm.getItemValue = function(itemKey) {
			return $cookies.get(itemKey);
		};
		
		vm.removeItem = function(itemKey) {
			vm.keys = vm.keys.filter(function(key) {
				return (key !== itemKey);
			});
			$cookies.remove(itemKey);
		};
	}
]);