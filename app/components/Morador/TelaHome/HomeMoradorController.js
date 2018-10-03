angular.module('condoManager')

.controller('HomeMoradorController', function($scope, $rootScope, $localStorage, $location) {
    
    $rootScope.usuarioLogado = $localStorage.usuarioLogado;

    $rootScope.logout = () => {
        delete $rootScope.usuarioLogado;
        delete $localStorage.usuarioLogado;
        $location.path("/login");
    }

});