angular.module('condoManager')

.controller('AddVisitanteController', function($scope, $rootScope, AddVisitanteService, $localStorage, $location) {
    
    $scope.visitante = new AddVisitanteService();

    //$scope.visitante.condominium_cnpj = $localStorage.usuarioLogado.condominium_cnpj;
    $scope.visitante.cpf_resident = $localStorage.usuarioLogado.cpf;

    $scope.cadastrar = () => {

        $scope.visitante.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                console.log("Visitante adicionado com sucesso!");
            }

            $scope.visitante.nome = '';
            $scope.visitante.cpf_visitor = '';
            $scope.visitante.recorrente = 'true';
            $scope.visitante.expiration_date = '';
            $scope.visitante.additional_information = '';
        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});