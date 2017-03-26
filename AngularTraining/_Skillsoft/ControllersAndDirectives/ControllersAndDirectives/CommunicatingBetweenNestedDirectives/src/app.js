"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstSchoolView', function(){
	
	console.log('tstSchoolView');
	return {

		templateUrl: 'templates/school.html',
		restrict: 'E',
		transclude: true,
		controller: function($scope) {
			
			$scope.students = [];
			
			this.register = function(name, studentNumber) {
				
				$scope.students.push({name: name, studentNumber: studentNumber});
				console.log('Student ' + name +' added as #' +studentNumber);
			}
		}
	};
	
});

angular.module('myApp').directive('tstStudent', function(){
	
	console.log('tstStudent');
	return {
		restrict: 'E',
		require: '^tstSchoolView',
		templateUrl: 'templates/student.html',
		scope: {
			name: '@',
			studentNumber: '@'
		},
		link: function(scope, element, attrs, schoolController) {
			console.log('schoolController.register(' + scope.name +', ' +scope.studentNubmer +' )');
			schoolController.register(scope.name, scope.studentNumber);
		}
	};
});


angular.module('myApp').controller('MainController', ['$scope', function($scope){
	
	console.log('MainController');
	
	
}]);




