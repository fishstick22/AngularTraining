"use strict";

angular.module('myApp', []);

angular.module('myApp').service('AppModel', 
	function($q, $timeout){
		
		console.log('AppModel -service');

		var usersSync = [
			{name: 'John Smith', id: 12345},
			{name: 'Jane Doe',   id: 45678},
			{name: 'Bob Johns',  id: 09876}
		];

		var usersAsync = [
			{name: 'BillyBob Nosepicker', id: 12345},
			{name: 'SallyAnn Buttscratcher',   id: 45678},
			{name: 'Uncle Grandpa Gleefus',  id: 09876}
		];
		
		this.getUsersSync = function() {
			return usersSync;
		};
		
		this.getUsersAsyncBad = function() {
			
			$timeout(function() {
				return usersAsync;
			}, 3000);
		};
		
		this.getUsersAsync = function(success) {
			
			var deferred = $q.defer();
			
			$timeout(function() {
				if (success) {
					deferred.resolve(usersAsync);
				}else{
					deferred.reject(new Error('sorry Jethro, some error'));
				}
			}, 3000);
			
			return deferred.promise;
		};
	}
);

angular.module('myApp').controller('MainController', ['AppModel', 
	function(AppModel){
	
		var vm = this;
		
		console.log('MainController');

		vm.model = AppModel;
		vm.users = [];
		
		vm.getUsersSync = function() {
			vm.users = vm.model.getUsersSync();
		};
		
		vm.getUsersAsyncBad = function() {
			vm.users = vm.model.getUsersAsyncBad();
		};
		
		vm.getUsersAsync = function(success) {
			vm.model.getUsersAsync().then(
				function(result) {
					vm.users = result;
				},
				function(error) {
					console.log(error);
				}
			);
		};
	}
]);