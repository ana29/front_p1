angular.module('condoManager')

.controller('AddFuncionarioController', function($scope, AddFuncionarioService, $location, $localStorage) {

    $scope.funcionario = new AddFuncionarioService();

    $scope.funcionario.condominium_cnpj = $localStorage.usuarioLogado.cnpj;
    $scope.funcionario.permission = 5;

    $scope.cadastrar = () => {
        
        $scope.funcionario.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                console.log("Funcionário adicionado com sucesso!");
            }
        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});
