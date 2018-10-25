angular.module('condoManager')

.controller('ListarAnunciosController', function($scope, ListarAnunciosService, $localStorage) {

    $scope.anuncios = [];
    $scope.selecionado = null;

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