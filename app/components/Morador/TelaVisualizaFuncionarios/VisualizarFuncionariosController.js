angular.module('condoManager')

.controller('VisualizarFuncionariosController', function($scope, VisualizarFuncionariosService, $rootScope, $localStorage, $location) {
    $scope.funcionarios = new VisualizarFuncionariosService();
        
});