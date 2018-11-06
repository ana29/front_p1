angular.module('condoManager')

.controller('AddLocalController', function($scope, AddLocalService, $localStorage, ListarLocaisService, AddReservaService) {

    $scope.local = new AddLocalService();
    $scope.locais = [];
    $scope.selecionado = null;

    $scope.reserva = new AddReservaService();
    $scope.diaSemana = '';
    $scope.horaInicio = '';
    $scope.horaFinal = '';

    $scope.local.cnpj = $localStorage.usuarioLogado.cnpj;

    $scope.cadastrarLocal = () => {
        
        $scope.local.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                console.log("Local adicionado com sucesso!");
                buscaLocais();
            }

            $scope.local.place_name = '';
            $scope.local.about = '';

        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }

    /**
     * Função para cadastro de reserva
     */
    $scope.cadastrarReserva = () => {

        $scope.reserva.placeId = $scope.selecionado.id;
        $scope.reserva.residentId = null;
        $scope.reserva.occupied = false;
        $scope.reserva.startTime = new Date($scope.diaSemana + " " + $scope.horaInicio + " GMT-0300");
        $scope.reserva.endTime = new Date($scope.diaSemana + " " + $scope.horaFinal + " GMT-0300");
  
        console.log($scope.reserva.startTime);
        console.log($scope.reserva.endTime);

        $scope.reserva.$save()
       
        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                console.log("Reserva adicionada com sucesso!");
                buscaLocais();
            }

            $scope.reserva.startTime = '';
            $scope.reserva.endTime = '';

        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }

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
