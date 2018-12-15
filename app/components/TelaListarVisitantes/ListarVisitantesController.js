angular.module('condoManager')

.controller('ListarVisitantesController', function ($scope, ListarVisitanteService, $localStorage) {

    $scope.visitante = [];
    $scope.filtro = '';
    $scope.mensagem = { texto: '' };


    let listarVisitante = () => {
        
        ListarVisitanteService.query({cnpj: $localStorage.usuarioLogado.cnpj},(visitante) => {
            $scope.visitante = visitante;
            $scope.mensagem = {};
        },
        
        (erro) => {
            console.log("Não foi possível obter a lista de visitantes");
            console.log(erro);

            $scope.mensagem = {
                texto: 'Não foi possível obter a lista de visitantes'
            };
        });
    };

    listarVisitante();
});
