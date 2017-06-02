// angular.module('myApp', [
// 	'ui.router'
// ]).config(function($stateProvider) {
//   $stateProvider.state("index", {
// 	  url: '/',
//       template: 'app/app.html'
//   });
//
// }).run(function () {
//
// });
 var myapp = angular.module('MyApp', [
	 'ui.router'
 ]);

//  myapp.config(function($stateProvider) {
//    $stateProvider.state("app", {
//  	  url: '/',
//        template: 'app/app.html',
// 	   controller: 'CtrlApp'
//    });
//
//  }).run(function () {
//
// });
myapp.config(function($stateProvider, $urlRouterProvider) {

 	$stateProvider.state("home", {
		name: "home",
		url: "/home",
		templateUrl: '/app/home/home.html'
	}).state("login", {
		name: "login",
		url: "/login",
		templateUrl: '/app/login/login.html',
		controller: 'LoginCtrl'
	}).state("app", {
		name: "app",
		url: "/app",
		templateUrl: '/app/test/app.html',
		controller: 'CtrlApp'
    });
	$urlRouterProvider.otherwise('/home');
});
