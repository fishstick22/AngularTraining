"use strict";

angular.module('myApp', []);

angular.module('myApp').service('AppModel', 
	function($http){

		console.log('AppModel http-service');

		this.states = [{name: 'Minnesota', abbreviation: 'MN'}, {name: 'Wisconsin', abbreviation: 'WI'}];
		
		this.getStates = function () {
			
			$http.get('http://localhost:3000/api/public/states')
				.then(function(response){
					this.states = response.data;
				}.bind(this),
				function(response){
					console.log(response.data);
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