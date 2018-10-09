angular.module('condoManager')

.controller('AddMoradorController', function($scope, AddMoradorService, $localStorage) {

    $scope.resident = new AddMoradorService();

    $scope.resident.condominium_cnpj = $localStorage.usuarioLogado.cnpj;
    $scope.resident.permission = 10;

    $scope.cadastrar = () => {
        
        $scope.resident.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Morador adicionado com sucesso" };
                console.log("Morador adicionado com sucesso")
            }

            $scope.resident.name = '';
            $scope.resident.house = '';
            $scope.resident.cpf = '';
            $scope.resident.email = '';
            $scope.resident.phone = '';
            $scope.resident.password = '';
        })

        .catch((erro) => {
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});