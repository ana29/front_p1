angular.module('condoManager')

.controller('HomeAdminController', function($scope, $rootScope, $localStorage, AddAnuncioService) {
    $scope.nomeApp = 'Condo Manager';
    $rootScope.usuarioLogado = $localStorage.usuarioLogado;

    $rootScope.logout = () => {
        delete $rootScope.usuarioLogado;
        delete $localStorage.usuarioLogado;
    }

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