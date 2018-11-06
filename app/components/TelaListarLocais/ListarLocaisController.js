angular.module('condoManager')

.controller('ListarLocaisController', function($scope, ListarLocaisService, $localStorage) {

    $scope.locais = [];
    $scope.selecionado = null;

    let buscaLocais = () => {
        // query Faz um get no recurso api/staff

        ListarLocaisService.query({cnpj: $localStorage.usuarioLogado.cnpj}, (locais) => {
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