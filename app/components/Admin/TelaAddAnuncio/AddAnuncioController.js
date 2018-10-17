angular.module('condoManager')

.controller('AddAnuncioController', function($scope, AddAnuncioService, $localStorage) {

    $scope.anuncio = new AddAnuncioService();

    $scope.anuncio.cnpj = $localStorage.usuarioLogado.cnpj;

    $scope.cadastrarAnuncio = () => {
        
        $scope.anuncio.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                console.log("Anúncio adicionado com sucesso!");
            }

            $scope.anuncio.announcement = '';

        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }

});