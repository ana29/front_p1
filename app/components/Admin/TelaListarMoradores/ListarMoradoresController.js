angular.module('condoManager')

.controller('ListarMoradoresController', function ($scope, ListarMoradoresService, $localStorage, DelUsuarioService) {

    $scope.moradores = [];
    $scope.filtro = '';
    $scope.mensagem = { texto: '' };
    $scope.selecionado = null;

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

    listarMoradores();

    $scope.selecionaMorador = (morador) => {
        $scope.selecionado = morador;
    };

    $scope.removeMorador = (moradorID) => {
        $('#removeMorador').modal('hide');
        $('#detalheMorador').modal('hide');
        DelUsuarioService.delete({ id: moradorID }, () => {
            listarMoradores();
        },
            (erro) => {
                console.log("Não foi possível remover o morador");
                console.log(erro);
            }
        );
    }
});