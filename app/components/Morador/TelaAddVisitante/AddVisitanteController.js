angular.module('condoManager')

.controller('AddVisitanteController', function($scope, $rootScope, AddVisitanteService, $localStorage, $location) {
    $scope.guest = new AddVisitanteService();

    $scope.cadastrar = () => {

        $scope.guest.$save()

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