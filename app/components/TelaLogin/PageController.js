angular.module('condoManager')

.controller('PageController', function($rootScope, $localStorage, $location) {
    
    $rootScope.usuarioLogado = $localStorage.usuarioLogado;

    $rootScope.logout = () => {
        delete $rootScope.usuarioLogado;
        delete $localStorage.usuarioLogado;
        $location.path("/login");
    }

});