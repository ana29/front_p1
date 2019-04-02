angular.module('condoManager')

.controller('HomeAdminController', function($scope, $rootScope, $localStorage, AddAnuncioService) {
    $scope.nomeApp = 'Condo Manager';
    $rootScope.usuarioLogado = $localStorage.usuarioLogado;
    $scope.statusError = false;

    $rootScope.logout = () => {
        delete $rootScope.usuarioLogado;
        delete $localStorage.usuarioLogado;
    }

    $scope.anuncio = new AddAnuncioService();

    $scope.cadastrarAnuncio = () => {
        
        $scope.anuncio.cnpj = $localStorage.usuarioLogado.cnpj;
        $scope.anuncio.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.statusError = false;
                console.log("Anúncio adicionado com sucesso!");
            }
            $scope.anuncio = new AddAnuncioService();
            $scope.anuncio.announcement = '';

        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.statusErro = true;
            console.log(erro);
        });
    }
});