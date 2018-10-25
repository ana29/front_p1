angular.module('condoManager')

.controller('CadastroController', function($scope, CondominiumService, UserService, $location) {

    $scope.condominio = new CondominiumService();

    $scope.user = new UserService();
    $scope.user.job = 'Síndico';
    $scope.user.role = 'ADMIN';

    $scope.cadastrar = () => {
        
        $scope.condominio.$save()

        .then(() => {

            $scope.user.cnpj = $scope.condominio.cnpj;

            $scope.user.$save()
            .then(() => {
                console.log("Usuario cadastrado com sucesso!");
            })
            .catch((erro) => {
                console.log("Erro no cadastro de usuario");
                console.log(erro);
            });

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