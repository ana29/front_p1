angular.module('condoManager')

.controller('AddServicoController', function($scope, AddServicoService, $localStorage) {

    $scope.servico = new AddServicoService();

    $scope.servico.cnpj = $localStorage.usuarioLogado.cnpj;

    $scope.cadastrarServico = () => {
        
        $scope.servico.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                console.log("Servico adicionado com sucesso!");
            }

            $scope.servico.name = '';
            $scope.servico.description = '';
        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});