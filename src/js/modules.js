/* global angular */
var app = angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngRoute',
    'ngMaterial'
]);
app.config(function($mdIconProvider) {
    $mdIconProvider.defaultIconSet('assets/fonts/mdi.svg');
});
app.controller('main', [function() {
    console.log('main');
}]);
app.controller('contenedor', [function() {
    console.log('contenedor');
    var cont = this;
}]);
app.controller('test', [function() {
    console.log('test');
    var ts = this;
}]);
