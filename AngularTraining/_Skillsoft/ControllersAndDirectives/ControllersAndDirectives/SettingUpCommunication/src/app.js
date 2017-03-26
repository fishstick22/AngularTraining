"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstSchoolView', function(){
	
	console.log('tstSchoolView');
	return {

		templateUrl: 'templates/school.html',
		restrict: 'E',
		controller: function($scope) {
			
			$scope.courses = [];
			
			this.addCourse = function(courseName) {
				
				$scope.courses.push(courseName);
				console.log(courseName + ' added to curriculum');
			}
		}
	};
	
});

angular.module('myApp').directive('tstCourseBiology', function(){
	
	console.log('tstCourseBiology');
	return {
		restrict: 'A',
		require: 'tstSchoolView',
		link: function(scope, elem, attrs, schoolController) {
			console.log('Biology course created.');
			schoolController.addCourse('Biology');
		}
	};
});

angular.module('myApp').directive('tstCoursePhysics', function(){
	
	console.log('tstCoursePhysics');
	return {
		restrict: 'A',
		require: 'tstSchoolView',
		link: function(scope, elem, attrs, schoolController) {
			console.log('Physics course created.');
			schoolController.addCourse('Physics');
		}
	};
});

angular.module('myApp').directive('tstCourseChemistry', function(){
	
	console.log('tstCourseChemistry');
	return {
		restrict: 'A',
		require: 'tstSchoolView',
		link: function(scope, elem, attrs, schoolController) {
			console.log('Chemistry course created.');
			schoolController.addCourse('Chemistry');
		}
	};
});
angular.module('myApp').controller('MainController', ['$scope', function($scope){
	
	console.log('MainController');
	
	
}]);




