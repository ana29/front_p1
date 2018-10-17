angular.module('condoManager')

.controller('AddLocalController', function($scope, AddLocalService, $localStorage) {

    $scope.local = new AddLocalService();

    $scope.local.cnpj = $localStorage.usuarioLogado.cnpj;

    $scope.cadastrarLocal = () => {
        
        $scope.local.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                console.log("Local adicionado com sucesso!");
            }

            $scope.local.place_name = '';
            $scope.local.about = '';
            $scope.local.days_booking = '';
            $scope.local.start_time = '';
            $scope.local.end_time = '';

        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});
