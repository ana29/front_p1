angular.module('condoManager')

.controller('HomeController', function($scope, $http) {
    $scope.nomeApp = 'Condo Manager';
    $http.get('https://projetop1.herokuapp.com')
        .then(function (data) {
            $scope.teste = data.body.teste;
        })
        .catch(function (err) {
            console.log(err);
        });
});