angular.module('condoManager')

.controller('AddMoradorController', function($scope, AddMoradorService, $localStorage) {

    $scope.user = new AddMoradorService();

    $scope.user.cnpj = $localStorage.usuarioLogado.cnpj;
    $scope.user.job = 'Morador';
    $scope.user.role = 'RESIDENT';

    $scope.cadastrar = () => {
        
        $scope.user.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Morador adicionado com sucesso" };
                console.log("Morador adicionado com sucesso")
            }

            $scope.user.name = '';
            $scope.user.address = '';
            $scope.user.cpf = '';
            $scope.user.email = '';
            $scope.user.phone = '';
            $scope.user.password = '';
        })

        .catch((erro) => {
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});