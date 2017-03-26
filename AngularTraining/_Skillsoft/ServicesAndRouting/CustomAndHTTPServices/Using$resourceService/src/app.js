"use strict";

angular.module('myApp', ['ngResource']);

angular.module('myApp').factory('User', [ '$resource', 
	function ($resource) {
		return $resource('http://localhost:3000/api/public/users/:id', {id: '@id'});
	}
]);

angular.module('myApp').controller('MainController', ['User',
	function(User) {
	
		var vm = this;
		
		console.log('MainController');

		vm.users = [];
		vm.selectedUser = null;
		
		this.getUsers = function() {
			vm.users = User.query();
		};
		
		this.getUser = function(id) {
			vm.selectedUser = User.get({id:id});
		};
		
		this.deleteUser = function(id) {
			User.delete({id:id});
		};
		
		this.addUser = function(name) {
			var user = new User({name:name});
			user.$save(function(newUser, putResponseHeaders) {
				vm.selectedUser = newUser;
			});
		};
	}
]);