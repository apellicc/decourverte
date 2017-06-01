var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
  var index = {
    url: '/',
    template: 'app/app.html'
  }
  $stateProvider.state(index);

}).run(function () {

});
