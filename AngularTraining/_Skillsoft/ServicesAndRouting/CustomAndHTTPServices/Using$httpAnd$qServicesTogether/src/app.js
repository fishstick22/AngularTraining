"use strict";

angular.module('myApp', []);

angular.module('myApp').service('AppModel', 
	function($http, $q){
	
		console.log('AppModel http-q-service');
		
		this.getState = function(abbreviation) {
			
			var defer = $q.defer();
			
			$http.get('http://localhost:3000/api/public/states/' +abbreviation)
				.then(function(response) {
					defer.resolve(response.data);
				}.bind(this),
				function(response) {
					defer.reject({error:response.data, status:response.status});
				}
			);
			
			return defer.promise;
		};
		
		this.getSomeStatesAtOnce = function(states) {
			
			var promises = [];
			states.forEach(function(state) {
				var promise = this.getState(state);
				promises.push(promise);
			}.bind(this));
			return $q.all(promises);
		};
		
	}
);

angular.module('myApp').controller('MainController', ['AppModel', 
	function(AppModel) {
	
		var vm = this;
		
		console.log('MainController');

		vm.model = AppModel;
		vm.states = [];
		
		vm.getState = function(abbreviation) {
			vm.model.getState(abbreviation).then(
				function(data) {
					vm.states.push(data);
				}
			);
		};
		
		vm.getSomeStates = function() {
			vm.getState('SD');
			vm.getState('NY');
			vm.getState('CA');
			vm.getState('NJ');
			
		};
		
		vm.getSomeStatesAtOnce = function() {
			vm.model.getSomeStatesAtOnce(['TX','MD','GA','ND']).then(
				function(results) {
					vm.states = vm.states.concat(results);
				}
			);
			
		};
	}
]);