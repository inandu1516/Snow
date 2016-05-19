var myApp = angular.module('myApp');

myApp.controller('ProductesController', ['$scope', '$http', '$location', '$routeParams',
    function($scope, $http, $location, $routeParams){

        /**
         * Cuan desde el client es cridi al metode 'getBooks', la funció fará una petició GET HTTP al servidor.
         * Quan la petició sigui rebuda correctamen, pasem les dades retornades (response) a l'objecte books del $scope
         * per a que totes les dades dels llibres siguin accesibles a la vista (res.json(books))
         */

        $scope.getProductes = function(){
            $http.get('/productes').success(function(response) {
                $scope.productes = response;
            });
        };

        // $scope.getBook = function(){
        //     var id = $routeParams.id;
        //     $http.get('/books/details/' + id).success(function(response) {
        //         $scope.book = response;
        //     });
        // };
        //
        $scope.crearProducte = function(){
            $http.post('/productes', $scope.producte).success(function(response) {
                window.location.href = '#/productes';
            });
        };
        //
        // $scope.editBook = function(){
        //     var id = $routeParams.id;
        //     $http.put('/books/' + id, $scope.book).success(function(response) {
        //         alert("Updated succesfully");
        //     });
        // };
        //
        // $scope.deleteBook = function(id){
        //     if (confirm("Sure to delete ?")) {
        //         $http.delete('/books/' + id).success(function(response) {
        //             window.location.href = '#/books';
        //         });
        //     }
        // };
        //
        // //---------- USERS FUNCTIONS -----------
        //
        // //https://www.youtube.com/watch?v=Pty0R0fC8OM
        // $scope.registerUser = function () {
        //     $http.post('/registerUser', $scope.user).success(function(response) {
        //         console.log("$scope.name: " + $scope.name);
        //         var name = $scope.user.name;
        //         alert("User " + name + " registrat OK");
        //         window.location.href = '#/login';
        //     });
        // };
        //
        // $scope.loginUser = function () {
        //     var name = $scope.user.name;
        //     var password = $scope.user.password;
        //     console.log("Trying to loggin with " + name + " with password " + password);
        //     window.location.href = '#/login/' + name;
        // };
        //
        // $scope.getUsers = function(){
        //     console.log("entered to getUsers()");
        //     $http.get('/users').success(function(response) {
        //         $scope.users = response;
        //     });
        // };
        //
        // //MIRAR http://stackoverflow.com/questions/24096546/mongoose-populate-vs-object-nesting
        // //cd "\Program Files\MongoDB\Server\3.2\bin"
        //
        // //http://localhost:3000/#/user/Inge
        // $scope.getUser = function(){
        //     var name = $routeParams.name;
        //     console.log("entered to getUser() : name = "+name);
        //     $http.get('/login/' + name).success(function(response) {
        //         $scope.user = response;
        //     });
        // };

    }]);