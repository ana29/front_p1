angular.module('condoManager')

.controller('AddMoradorController', function($scope, AddMoradorService, $location, $localStorage) {

    $scope.resident = new AddMoradorService();

    $scope.resident.condominium_cnpj = $localStorage.usuarioLogado.cnpj;

    $scope.cadastrar = () => {
        
        $scope.resident.$save()

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