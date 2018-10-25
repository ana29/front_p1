angular.module('condoManager')

.controller('VisualizarFuncionariosController', function($scope, VisualizarFuncionariosService, $localStorage) {

    $scope.funcionarios = [];

    let buscaFuncionarios = () => {
        // query Faz um get no recurso api/staff

        VisualizarFuncionariosService.query({cnpj: $localStorage.usuarioLogado.cnpj}, (funcionarios) => {
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

    buscaFuncionarios();

    $scope.selecionaFuncionario = (funcionario) => {
        $scope.selecionado = funcionario;
    };
    
});