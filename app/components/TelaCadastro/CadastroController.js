angular.module('condoManager')

.controller('CadastroController', function($scope, CadastroService, $location) {

    $scope.condominio = new CadastroService();
    $scope.condominio.permission = 0;

    $scope.cadastrar = () => {
        
        $scope.condominio.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                console.log("Condomínio cadastrado com sucesso!");
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