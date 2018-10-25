angular.module('condoManager')

.controller('VisualizarNotificacoesController', function($scope, VisualizarNotificacoesService, $localStorage) {

    $scope.notificacoes = [];
    $scope.selecionado = null;

    let buscaNotificacoes = () => {
        let pesquisa = null;

        if ($localStorage.usuarioLogado.condominium_cnpj) {
            pesquisa = $localStorage.usuarioLogado.condominium_cnpj;
        } else {
            pesquisa = $localStorage.usuarioLogado.cnpj;
        }

        VisualizaNotificacoesService.query({cnpj: pesquisa}, (notificacoes) => {
            $scope.notificacoes = notificacoes;
            $scope.mensagem = {};
        },

            //Callback de erro
            (erro) => {
                console.log("Não foi possível obter as notificações");
                console.error(erro);

                $scope.mensagem = {
                    texto: 'Não foi possível obter as notificações'
                };
            });
    };

    buscaNotificacoes();

    $scope.selecionaNotificacao = (notificacao) => {
        $scope.selecionado = notificacao;
    };

});