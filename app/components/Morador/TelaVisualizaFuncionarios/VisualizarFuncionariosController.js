angular.module('condoManager')

.controller('VisualizarFuncionariosController', function($scope, VisualizarFuncionariosService, $rootScope, $localStorage, $location) {
    //$scope.funcionarios = new VisualizarFuncionariosService();
    $scope.funcionarios = [];

    let buscaFuncionarios = () => {
        // query Faz um get no recurso api/staff
        let pesquisa = null;

        if ($localStorage.usuarioLogado.condominium_cnpj) {
            pesquisa = $localStorage.usuarioLogado.condominium_cnpj;
        } else {
            pesquisa = $localStorage.usuarioLogado.cnpj;
        }

        VisualizarFuncionariosService.query({cnpj: pesquisa}, (funcionarios) => {
            $scope.funcionarios = funcionarios;
            $scope.mensagem = {};
        },

            //Callback de erro
            (erro) => {
                console.log("Não foi possível obter a lista de serviços");
                console.error(erro);

                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista de serviços'
                };
            });
    };

    let listarMoradores = () => {
        
        ListarMoradoresService.query({cnpj: $localStorage.usuarioLogado.cnpj},(moradores) => {
            $scope.moradores = moradores;
            $scope.mensagem = {};
        },
        
        (erro) => {
            console.log("Não foi possível obter a lista de moradores");
            console.log(erro);

            $scope.mensagem = {
                texto: 'Não foi possível obter a lista de moradores'
            };
        });
    };

    buscaFuncionarios();

    $scope.selecionaFuncionario = (funcionario) => {
        $scope.selecionado = funcionario;
    };
    
});