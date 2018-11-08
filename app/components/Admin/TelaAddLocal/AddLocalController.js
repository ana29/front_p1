angular.module('condoManager')

.controller('AddLocalController', function($scope, AddLocalService, $localStorage, 
    ListarLocaisService, AddReservaService, DelReservaService,
    GetResidentService) {

    $scope.local = new AddLocalService();
    $scope.locais = [];
    $scope.localSelecionado = null;
    $scope.reservaSelecionada = null;
    $scope.reservas = null;
    $scope.resident = null;

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
                
            }
            buscaLocais();
            $('#adicionarLocal').modal('hide');
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

        $scope.reserva.placeId = $scope.localSelecionado.id;
        $scope.reserva.residentId = null;
        $scope.reserva.occupied = false;
        $scope.reserva.startTime = new Date($scope.diaSemana + " " + $scope.horaInicio + " GMT-0300");
        $scope.reserva.endTime = new Date($scope.diaSemana + " " + $scope.horaFinal + " GMT-0300");
  
        console.log($scope.reserva.startTime);
        console.log($scope.reserva.endTime);

        $scope.reserva.$save()
       
        .then(() => {
            if ($scope.frm.$valid) {
                $('#adicionarReserva').modal('hide');
                $scope.mensagem = { texto: "Salvo com sucesso" };
                console.log("Reserva adicionada com sucesso!");
                buscaReservas();
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
            console.log("Locais carregados com sucesso")
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

    let buscaReservas = (placeId) => {
        AddReservaService.query({placeId: placeId}, (reservas) => {
            $scope.reservas = reservas;
        });
    }

    $scope.selecionaLocal = (local) => {
        $scope.localSelecionado = local;

        AddReservaService.query({placeId: $scope.localSelecionado.id}, 
            
            buscaReservas($scope.localSelecionado.id),

            //Callback de erro
            (erro) => {
                console.log("Não foi possível obter a lista de reservas");
                console.error(erro);
            });
    };

    $scope.selecionaReserva = (reserva) => {
        $scope.reservaSelecionada = reserva;
    }
    $scope.removeReserva = (reservationId) => {
        $('#removeReserva').modal('hide');
        DelReservaService.delete({ id: reservationId },() => {
            buscaReservas($scope.reservaSelecionada.placeId);
        },

            //Calback de falha
            (erro) => {
                console.log("Não foi possível remover a reserva");
                console.log(erro);
            }
        );
    }

    /**
     * BUG
     */

    $scope.getResidentById = (residentId) => {
        
        if (residentId) {
            GetResidentService.get({id: residentId}, (resident) => {
                $scope.resident = resident;
                console.log($scope.resident);
            },
            
            (erro) => {
                console.log("Não foi possível obter o resident por ID");
                console.log(erro);
            }
            );
        }
        
    }

});
