angular.module('condoManager')

.controller('ListarLocaisController', function($scope, ListarLocaisService, $localStorage, AddReservaService, DelReservaService,  $filter) {

    $scope.locais = [];
    $scope.localSelecionado = null;

    $scope.horarioSelecionado = null;

    $scope.reservas = null;
    $scope.reservasDoUsuario = null;
    $scope.reservaSelecionada = null;
    
    $scope.reserva = new AddReservaService();
    $scope.diaSemana = '';
    $scope.horaInicio = '';
    $scope.horaFinal = '';

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
            });
    };

    buscaLocais();

    $scope.selecionaLocal = async (local) => {
        $scope.localSelecionado = local;
        if(buscaReservas($scope.localSelecionado.id)) {
            $scope.reservasDoUsuario = await $scope.reservas.filter(filtroID, $localStorage.usuarioLogado.id);
        }
        
    };

    $scope.ts = (content) => {
        return JSON.parse(content);
    }

    $scope.selecionarHorario = (horario) => {
        $scope.horarioSelecionado = horario;
        
        $scope.horarioSelecionado.startTime = $filter('date')(horario.startTime, 'HH:mm:ss');
        $scope.horarioSelecionado.endTime = $filter('date')(horario.endTime, 'HH:mm:ss');
        console.log($scope.localSelecionado);
        buscaReservas($scope.localSelecionado.id)
    }

    let buscaReservas = (placeId) => {
        AddReservaService.query({placeId: placeId}, (reservas) => {
            $scope.reservas = reservas;
            return true;
        });
        return false;
    }

    /**
     * Calendario
     */
    $scope.dateOptions = {
		dateDisabled: disabled,
		formatYear: 'yyyy',
		maxDate: new Date(new Date().setDate(new Date().getDate()+60)),
        minDate: new Date(),
		startingDay: 0,
		showWeeks: false
    };
    
    $scope.popup1 = {
		opened: false
    };
    
    $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];

	$scope.format = 'dd/MM/yyyy';
    $scope.alltInputFormats = ['d!/M!/yyyy'];
    
	function disabled(data) {

		let date = data.date,
            mode = data.mode;
            
        let datasNaReserva = $scope.reservas.filter(filtro, date.toLocaleDateString()).map(a => new Date(a.startTime).toLocaleDateString());

        return mode === 'day' && 
                (date.getDay() != findCodeDay($scope.horarioSelecionado.dia)) ||
                (datasNaReserva.includes(date.toLocaleDateString()));
    };

    

    function filtro(valor) {
        let dataReserva = new Date(valor.startTime);
        return (dataReserva.toLocaleDateString() == this);
    }

    $scope.filtroID = function(valor) {
        let id = valor.residentId;
        return id == this;
    }
    
    $scope.open1 = function() {
		$scope.popup1.opened = true;
    }
    
    let findCodeDay = (dia) => {
		let days_cal2 = [
			{ dia: 'Domingo', code: 0 },
			{ dia: 'Segunda-feira', code: 1 },
			{ dia: 'Terça-feira', code: 2 },
			{ dia: 'Quarta-feira', code: 3 },
			{ dia: 'Quinta-feira', code: 4 },
			{ dia: 'Sexta-feira', code: 5 },
			{ dia: 'Sábado', code: 6 },
		];

		for (let i = 0; i < days_cal2.length; i++) {
			if (dia === days_cal2[i].dia) {
				return days_cal2[i].code;
			}
		}
    }
    
    $scope.cadastrarReserva = () => {

        $scope.reserva.placeId = $scope.localSelecionado.id;
        $scope.reserva.residentId = $localStorage.usuarioLogado.id;
        $scope.reserva.occupied = true;
        $scope.reserva.startTime = new Date(new Date($scope.dt.toDateString() + " " + $scope.horarioSelecionado.startTime));
        $scope.reserva.endTime = new Date(new Date($scope.dt.toDateString() + " " + $scope.horarioSelecionado.endTime));

        $scope.reserva.$save()
       
        .then(() => {
            if ($scope.frm.$valid) {
                $('#adicionarReserva').modal('hide');
                console.log("Reserva adicionada com sucesso!");
                buscaReservas($scope.localSelecionado.id);
            }

            $scope.reserva.startTime = '';
            $scope.reserva.endTime = '';
            $scope.dt = '';

        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }

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
});