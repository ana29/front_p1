angular.module('condoManager')

.controller('HomeMoradorController', function($scope, $http, $rootScope, $localStorage, $location, $resource, ListarAnunciosService)  {

    $rootScope.usuarioLogado = $localStorage.usuarioLogado;

    $scope.anuncios = [];
    $scope.selecionado = null;
    
    $rootScope.logout = () => {
        delete $rootScope.usuarioLogado;
        delete $localStorage.usuarioLogado;
        $location.path("/login");
    }

    let buscaAnuncios = () => {
        // query Faz um get no recurso api/staff

        ListarAnunciosService.query({cnpj: $localStorage.usuarioLogado.cnpj}, (anuncios) => {
            $scope.anuncios = anuncios;
            $scope.mensagem = {};
        },

            //Callback de erro
            (erro) => {
                console.log("Não foi possível obter a lista de anúncios");
                console.error(erro);

                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista de anúncios'
                };
            });
    };

    buscaAnuncios();

    $scope.selecionaAnuncio = (anuncio) => {
        $scope.selecionado = anuncio;
    };

});