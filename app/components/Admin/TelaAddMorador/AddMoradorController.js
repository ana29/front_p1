angular.module('condoManager')

.controller('AddMoradorController', function($scope, AddMoradorService, $location) {

    $scope.resident = new AddMoradorService();

    $scope.cadastrar = () => {
        
        $scope.resident.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                alert("Salvo com sucesso!");
                $location.path("/login");
            }
        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});