angular.module('condoManager')

.controller('HomeAdminController', function($scope, $rootScope, $localStorage) {
    $scope.nomeApp = 'Condo Manager';
    $rootScope.usuarioLogado = $localStorage.usuarioLogado;

    $rootScope.logout = () => {
        delete $rootScope.usuarioLogado;
        delete $localStorage.usuarioLogado;
    }
});