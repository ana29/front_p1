angular.module('condoManager')

.controller('ListarMoradoresController', function ($scope, ListarMoradoresService) {

    $scope.moradores = [];
    $scope.filtro = '';
    $scope.mensagem = { texto: '' };


    let listarMoradores = () => {
        
        ListarMoradoresService.query((moradores) => {
            $scope.moradores = moradores;
            $scope.mensagem = {};
        },
        
        (erro) => {
            console.log("Não foi possível obter a lista de moradores");
            console.log(erro);

            $scope.mensagem = {
                texto: 'Não foi possível obter a lista de moradores'
            };
        });
    };

    listarMoradores();
});