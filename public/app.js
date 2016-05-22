/**
 * Aquí especifiquem quines vistes cargar i amb quins controladors al escriure les adreçes desde el client
 */

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/', {
        controller:'ProductesController',
        templateUrl: 'vistes/productes.html'
    })
    .when('/productes', {
        controller:'ProductesController',
        templateUrl: 'vistes/productes.html'
    })
    .when('/producte/detalls/:id',{
        controller:'ProductesController',
        templateUrl: 'vistes/producteDetalls.html'
    })
    .when('/crearProducte',{
        controller:'ProductesController',
        templateUrl: 'vistes/crearProducte.html'
    })
    .when('/producte/edita/:id',{
        controller:'ProductesController',
        templateUrl: 'vistes/editaProducte.html'
    })
    .when('/usuaris',{
        controller:'UsuarisController',
        templateUrl: 'vistes/usuaris.html'
    })
    .when('/register',{
        controller:'UsuarisController',
        templateUrl: 'vistes/registre.html'
    })
    .when('/login',{
        controller:'UsuarisController',
        templateUrl: 'vistes/login.html'
    })
    .when('/login/:username', {
        controller:'UsuarisController',
        templateUrl: 'vistes/perfilUsuari.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});