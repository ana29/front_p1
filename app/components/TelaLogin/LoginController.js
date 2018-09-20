var condomanager = angular.module('condomanager');

condomanager.controller('LoginController', ['$scope', '$location', '$timeout', '$routeParams', 'LoginService', function($scope, $location, $timeout, $routeParams, LoginService) {

    $scope.submitForm = function() {
        var user = {
            cnpj: $scope.cnpj,
            password: $scope.input
        };

        if ($scope.userForm.$valid) {
            LoginService.login(user)
                // handle success
                .then(function () {
                    
                    $timeout(function() {
                        $location.path('/home');
                        }, 1500);
                })
                // handle error
                .catch(function (error) {
                    var dangerMessage = error.err;

                });
        };
    };
}]);