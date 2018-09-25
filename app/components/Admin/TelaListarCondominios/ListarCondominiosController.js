angular.module('condoManager')

.controller('ListarCondominiosController', function($scope, ListarCondominiosService, $location) {

    $scope.condominios = [];
    $scope.filtro = '';
    $scope.mensagem = { texto: '' };


    let listarCondominios = () => {
        
        ListarCondominiosService.query((condominios) => {
            $scope.condominios = condominios;
            $scope.mensagem = {};
        },
        
        (erro) => {
            console.log("Não foi possível obter a lista de condomínios");
            console.log(erro);

            $scope.mensagem = {
                texto: 'Não foi possível obter a lista de condomínios'
            };
        });
    };

    listarCondominios();
});