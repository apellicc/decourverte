angular.module('MyApp').controller('LoginCtrl', function($scope, $http) {
	let user = {
		username : $scope.usrname,
		name : $scope.name,
	};
		 $scope.checkValidity = function() {
			 user.username = $scope.usrname;
			 user.name = $scope.name;
			 console.log(user);
			 $http.post('/checkVal', user).then(function () {
				 console.log("good");
			 }, function () {
				 console.log("bad");
			 });
		 };
});
