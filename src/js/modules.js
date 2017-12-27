/* global angular */
var app = angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngRoute',
    'ngMaterial',
    'ngQuill'
]);
app.config(function ($mdIconProvider) {
    $mdIconProvider.defaultIconSet('assets/fonts/mdi.svg');
});
app.config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
    ngQuillConfigProvider.set({modules:{toolbar:false,formula:true}, formats: ['bold','italic','formula']});
}]);
app.controller('main', [function () {
    console.log('main');
}]);
app.controller('contenedor', [function () {
    console.log('contenedor');
    var cont = this;
}]);
app.controller('test', ['$location', function ($location) {
    console.log('test');
    var ts = this;
    ts.accion = $location.path().substr(6);
    switch(ts.accion) {
        case 'abrir':
            ts.volver = {
                'accion': '#',
                'aria': 'Volver a la página inicial'
            };
            break;
        case 'nuevo':
            ts.volver = {
                'accion': '#test/abrir',
                'aria': 'Volver al listado de recursos'
            };
            break;
        default:
            // code
    }
    ts.recurso = {};
}]);
