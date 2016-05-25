var myApp = angular.module('myApp');

myApp.controller('ProductesController', ['$rootScope', '$scope', '$http', '$location', '$routeParams',
    function($rootScope, $scope, $http, $location, $routeParams){

        $rootScope.userLogged = sessionStorage.getItem("LoggedUser");

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

        $scope.getProducte = function(){
            var id = $routeParams.id;
            $http.get('/producte/detalls/' + id).success(function(response) {
                $scope.producte = response;
            });
        };

        $scope.crearProducte = function(){
            $http.post('/productes', $scope.producte).success(function() {
                window.location.href = '#/productes';
            });
        };

        $scope.editaProducte = function(){
            var id = $routeParams.id;
            $http.put('/producte/' + id, $scope.producte).success(function() {
                alert("Actualitzat Correctament!");
            });
        };

        $scope.borraProducte = function(id){
            if (confirm("Segur vols eliminar-lo ?")) {
                $http.delete('/producte/' + id).success(function() {
                    window.location.href = '#/';
                });
            }
        };
        
        $scope.compraProducte = function (nom, id) {
            if (confirm($rootScope.userLogged + " s'hafegira " + nom + " al carret, seguir ?")) {
                console.log($rootScope.userLogged + " compra : " + id);

                var compra = {
                    userName: $rootScope.userLogged,
                    producteID: id
                };

                console.log(compra);

                $http.put('/comprar', compra).success(function() {
                    alert(id + " sh'a afegit al carret. Gracies x comprar, " + $rootScope.userLogged);
                });
            }
        };

    }]);