angular.module('condoManager')

.controller('ListarAnunciosController', function($scope, ListarAnunciosService, $localStorage) {

    $scope.anuncios = [];
    $scope.selecionado = null;

    let buscaAnuncios = () => {
        // query Faz um get no recurso api/staff
        let pesquisa = null;

        if ($localStorage.usuarioLogado.condominium_cnpj) {
            pesquisa = $localStorage.usuarioLogado.condominium_cnpj;
        } else {
            pesquisa = $localStorage.usuarioLogado.cnpj;
        }

        ListarAnunciosService.query({cnpj: pesquisa}, (anuncios) => {
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