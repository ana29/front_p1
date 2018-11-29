angular.module('condoManager')

.controller('ListarVisitantesController', function ($scope, ListarVisitantesService, $localStorage) {

    $scope.visitantes = [];
    $scope.filtro = '';
    $scope.mensagem = { texto: '' };

    let listarVisitantes = (cpf) => {
        
        ListarVisitantesService.query({cpf_resident: cpf},(visitantes) => {
            $scope.visitantes = visitantes;
            $scope.mensagem = {};
            console.log($scope.visitantes)
        },
        
        (erro) => {
            console.log("Não foi possível obter a lista de visitantes");
            console.log(erro);

            $scope.mensagem = {
                texto: 'Não foi possível obter a lista de visitantes'
            };
        });
    };

    if ($localStorage.usuarioLogado.role == 'RESIDENT') {
        listarVisitantes($localStorage.usuarioLogado.cpf);
    }
    

    $scope.pesquisarVisitantes = (cpf) => {
        listarVisitantes($scope.cpf);
    }
});