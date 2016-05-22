var myApp = angular.module('myApp');

myApp.controller('UsuarisController', ['$scope', '$rootScope', '$http', '$location', '$routeParams',
    function($scope, $rootScope, $http, $location, $routeParams){

        console.log("entered to UsuarisController");

        $scope.getUsuaris = function(){
            console.log("entered to getUsuaris()");
            $http.get('/usuaris').success(function(response) {
                $scope.usuaris = response;
            });
        };

        $scope.loginUser = function(){
            console.log("loginUser");
            var user = $scope.user;
            var username = $scope.user.username;
            console.log(user.username);
            console.log(user);
            $http.post('/login', user).success(function(response) {
                console.log("success");
                console.log(response);
                if(response == null){
                    console.log("NO S'HA TROBAT CAP USUARI");
                }else{
                    $rootScope.currentUser = response;
                    $location.url("/perfilUsuari");
                }
                // $scope.usuari = response;
                // window.location.href = '#/perfilUsuari/' +  $scope.usuari.username;
            });
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
                var name = $scope.user;
                alert("User " + name + " registrat OK");
                // window.location.href = '#/login';
                $location.url("/login");
            });
        };

}]);