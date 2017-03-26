"use strict";

angular.module('myApp', []);

angular.module('myApp').factory('AppModel', [
	function(){
	
		var model = {};
		
		console.log('AppModel -factory');

		model.user = {
			name: 'John Smith'	
		};
		
		model.sayHello = function () {
			alert('Hello from AngularJS -factory');
		};
		
		return model;
	}
]);

//angular.module('myApp').service('AppModel', [
//	function(){
//	
//		console.log('AppModel -service');
//
//		this.user = {
//			name: 'John Smith'	
//		};
//		
//		this.sayHello = function () {
//			alert('Hello from AngularJS -service');
//		};
//	}
//]);


angular.module('myApp').controller('MainController', ['AppModel', 
	function(AppModel){
	
		var vm = this;
		
		console.log('MainController');

		this.model = AppModel;
	}
]);

angular.module('myApp').controller('FirstController', ['AppModel',
	function(AppModel){
	
		var vm = this;
		
		console.log('FirstController');
		
		this.model = AppModel;
		this.user = {
			name: 'Michael Scott'	
		};
}
]);

angular.module('myApp').controller('SecondController', ['AppModel',
	function(AppModel){
	
		var vm = this;
		
		console.log('SecondController');

		this.model = AppModel;
		this.user = {
			name: 'Jane Doe'	
		};
	}
]);