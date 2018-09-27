angular.module('condoManager')

.controller('AddFuncionarioController', function($scope, AddFucionarioService, $location, $localStorage) {

    $scope.funcionario = new AddFuncionarioService();

    $scope.funcionario.condominium_cnpj = $localStorage.usuarioLogado.cnpj;

    $scope.cadastrar = () => {
        
        $scope.funcionario.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                alert("Salvo com sucesso!");
            }
        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});
