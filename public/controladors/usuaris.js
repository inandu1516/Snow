var myApp = angular.module('myApp');

myApp.controller('UsuarisController', ['$scope', '$http', '$location', '$routeParams',
    function($scope, $http, $location, $routeParams){

        console.log("entered to UsuarisController");

        $scope.getUsuaris = function(){
            console.log("entered to getUsuaris()");
            $http.get('/usuaris').success(function(response) {
                $scope.usuaris = response;
            });
        };

        $scope.loginUsuari = function () {
            var username = $scope.usuari.username;
            var password = $scope.usuari.password;
            console.log("Trying to loggin with " + username + " with password " + password);
            window.location.href = '#/login/' + username;
        };

        $scope.getUsuari = function(){
            var username = $routeParams.username;
            console.log("entered to getUser() : name = "+username);
            $http.get('/login/' + username).success(function(response) {
                $scope.usuari = response;
            });
        };

        //https://www.youtube.com/watch?v=Pty0R0fC8OM
        $scope.registerUser = function () {
            $http.post('/registerUser', $scope.user).success(function(response) {
                console.log("$scope.name: " + $scope.name);
                var name = $scope.user.name;
                alert("User " + name + " registrat OK");
                window.location.href = '#/login';
            });
        };

}]);