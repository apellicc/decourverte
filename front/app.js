'use strict';

angular.module('myApp', [
  'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
        url: '/',
        templateUrl: '../front/app/app.html',
        controller: 'AppCtrl'
    });

}).run(function () {

});
