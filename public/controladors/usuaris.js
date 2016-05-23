var myApp = angular.module('myApp');

myApp.controller('UsuarisController', ['$scope', '$rootScope', '$http', '$location', '$routeParams',
    function($scope, $rootScope, $http, $location, $routeParams){

        $rootScope.userLogged = sessionStorage.getItem("LoggedUser");

        $scope.getUsuaris = function(){
            console.log("entered to getUsuaris()");
            $http.get('/usuaris').success(function(response) {
                $scope.usuaris = response;
            });
        };

        $scope.loginUser = function(){
            console.log("loginUser");
            var user = $scope.user;

            if(sessionStorage.getItem("LoggedUser")){
                console.log("USER IS LOGGED AND STORED ON SESSION STORAGE !");
                user = {
                    username: sessionStorage.getItem("LoggedUser"),
                    password: sessionStorage.getItem("LoggedUserPass")
                };
                console.log(user);
            }

            $http.post('/login', user).success(function(response) {
                console.log("success");
                // console.log(response);
                if(response == null){
                    console.log("NO S'HA TROBAT CAP USUARI");
                }else{

                    sessionStorage.setItem("LoggedUser", user.username);
                    sessionStorage.setItem("LoggedUserPass", user.password);

                    $rootScope.currentUser = response;
                    $location.url("/perfilUsuari");
                }
            });
        };

        $scope.logOut = function () {
            console.log("logOut");
            sessionStorage.removeItem("LoggedUser");
            sessionStorage.removeItem("LoggedUserPass");
            $location.url("/");
        };
        
        // $scope.getUsuari = function(){
        //     var username = $routeParams.username;
        //     console.log("entered to getUser() : name = "+username);
        //     $http.get('/login/' + username).success(function(response) {
        //         $scope.usuari = response;
        //     });
        // };

        //https://www.youtube.com/watch?v=Pty0R0fC8OM
        $scope.registerUser = function () {
            $http.post('/registerUser', $scope.user).success(function(response) {
                console.log("$scope.name: " + $scope.name);
                var name = $scope.user;
                alert("User " + name + " registrat OK");
                $location.url("/login");
            });
        };

}]);