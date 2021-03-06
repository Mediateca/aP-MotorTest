/* global angular */
var app = angular.module('app');
// Enrutamientos
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'assets/views/contenedor.html'
        })
        .when('/test/:estado', {
            templateUrl: 'assets/views/test.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
