angular.module('condoManager')

.controller('CadastroController', function($scope, CadastroService, $location) {

    $scope.condominio = new CadastroService();

    $scope.cadastrar = () => {
        
        $scope.condominio.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                alert("Salvo com sucesso!");
                $location.path("/login");
            }
        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scpoe.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});