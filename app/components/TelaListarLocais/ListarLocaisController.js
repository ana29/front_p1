angular.module('condoManager')

.controller('ListarLocaisController', function($scope, ListarLocaisService, $localStorage) {

    $scope.locais = [];
    $scope.selecionado = null;

    let buscaLocais = () => {
        // query Faz um get no recurso api/staff
        let pesquisa = null;

        if ($localStorage.usuarioLogado.condominium_cnpj) {
            pesquisa = $localStorage.usuarioLogado.condominium_cnpj;
        } else {
            pesquisa = $localStorage.usuarioLogado.cnpj;
        }

        ListarLocaisService.query({cnpj: pesquisa}, (locais) => {
            $scope.locais = locais;
            $scope.mensagem = {};
        },

            //Callback de erro
            (erro) => {
                console.log("Não foi possível obter a lista de locais");
                console.error(erro);

                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista de locais'
                };
            });
    };

    buscaLocais();

    $scope.selecionaLocal = (local) => {
        $scope.selecionado = local;
    };

});