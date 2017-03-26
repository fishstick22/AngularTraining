"use strict";

angular.module('myApp', []);

angular.module('myApp').service('AppModel', 
	function($http){

		console.log('AppModel http-service');

		this.users = [];
		
		this.addUser = function (user) {
			
			$http.post('http://localhost:3000/api/public/users', user)
				.then(function(response){
					this.users.push(response.data);
				}.bind(this),
				function(response){
					console.log('Error occured');
				}
			);
		}
	}
);

angular.module('myApp').controller('MainController', ['AppModel', 
	function(AppModel){
	
		var vm = this;
		
		console.log('MainController');

		this.model = AppModel;
	}
]);