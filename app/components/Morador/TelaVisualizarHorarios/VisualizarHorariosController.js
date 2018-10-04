angular.module('condoManager')

.controller('VisualizarHorariosController', function($scope, VisualizarHorariosService, VisualizarCondominioService, $localStorage, $location) {
    
    $scope.horarios = [];
    $scope.condominioSelecionado = null;

    let listarHorarios = () => {
        
        VisualizarHorariosService.query({cnpj: $localStorage.usuarioLogado.condominium_cnpj},(horarios) => {
            $scope.horarios = horarios;
        },
        
        (erro) => {
            console.log("Não foi possível obter a lista de moradores");
            console.log(erro);
        });
        
    };

    listarHorarios();

    $scope.selecionaHorario = (horario) => {
        $scope.selecionado = horario;

        VisualizarCondominioService.get({ cnpj: horario.cnpj },

            (condominio) => {
                $scope.condominioSelecionado = condominio;
            },

            (erro) => {
                console.log("Não foi possível obter o condomínio");
                console.log(erro);
            }
        );
    };
});