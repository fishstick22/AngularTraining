"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', ['$cacheFactory', 
	function($cacheFactory){
	
		var vm = this;
		
		console.log('MainController');
		vm.keys = [];
		vm.cache = $cacheFactory('testCache');
		
		vm.addItem = function(itemKey, itemValue) {
			console.log('MainController.addItem('+itemKey+', ' +itemValue +')');
			vm.keys.push(itemKey);
			vm.cache.put(itemKey, itemValue);
		};
		
		vm.getItem = function(itemKey) {
			vm.currentItem = vm.cache.get(itemKey);
		};
		
		vm.removeItem = function(itemKey) {
			vm.keys = vm.keys.filter(function(key) {
				return (key !== itemKey);
			});
			vm.cache.remove(itemKey);
		};
	}
]);