var masterApp = angular.module('masterApp', ['ngResource', 'ngRoute']);

masterApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/Home', {
		templateUrl: 'app/Master/master.html',
		controller: 'MasterController'
	})
	.otherwise({ redirectTo: '/Home'});

	//$locationProvider.html5Mode(true);
});
