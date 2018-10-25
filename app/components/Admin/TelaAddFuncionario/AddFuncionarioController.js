angular.module('condoManager')

.controller('AddFuncionarioController', function($scope, AddFuncionarioService, $localStorage) {

    $scope.user = new AddFuncionarioService();

    $scope.user.cnpj = $localStorage.usuarioLogado.cnpj;
    $scope.user.job = 'Funcionário';
    $scope.user.role = 'STAFF';

    $scope.cadastrar = () => {
        
        $scope.user.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                console.log("Funcionário adicionado com sucesso!");
            }

            $scope.user.address = '';
            $scope.user.name = '';
            $scope.user.cpf = '';
            $scope.user.email = '';
            $scope.user.phone = '';
            $scope.user.password = '';
        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});
