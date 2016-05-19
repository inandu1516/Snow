/**
 * Aquí especifiquem quines vistes cargar i amb quins controladors al escriure les adreçes desde el client
 */

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/', {
        controller:'ProductesController',
        templateUrl: 'vistes/productes.html'
    })
    // .when('/register',{
    //     controller:'BooksController',
    //     templateUrl: 'vistes/register.html'
    // })
    // .when('/login',{
    //     controller:'BooksController',
    //     templateUrl: 'vistes/login.html'
    // })
    // .when('/login/:name', {
    //     controller:'BooksController',
    //     templateUrl: 'vistes/userProfile.html'
    // })
    // .when('/users', {
    //     controller:'BooksController',
    //     templateUrl: 'vistes/users.html'
    // })
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
    .otherwise({
            redirectTo: '/'
        });
});