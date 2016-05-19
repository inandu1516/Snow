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
    //     templateUrl: 'views/register.html'
    // })
    // .when('/login',{
    //     controller:'BooksController',
    //     templateUrl: 'views/login.html'
    // })
    // .when('/login/:name', {
    //     controller:'BooksController',
    //     templateUrl: 'views/userProfile.html'
    // })
    // .when('/users', {
    //     controller:'BooksController',
    //     templateUrl: 'views/users.html'
    // })
    .when('/productes', {
        controller:'ProductesController',
        templateUrl: 'vistes/productes.html'
    })
    // .when('/books/details/:id',{
    //     controller:'BooksController',
    //     templateUrl: 'views/book_details.html'
    // })
    .when('/crearProducte',{
        controller:'ProductesController',
        templateUrl: 'vistes/crearProducte.html'
    })
    // .when('/books/edit/:id',{
    //     controller:'BooksController',
    //     templateUrl: 'views/edit_book.html'
    // })
    .otherwise({
            redirectTo: '/'
        });
});