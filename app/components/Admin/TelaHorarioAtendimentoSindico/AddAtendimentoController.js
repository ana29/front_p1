angular.module('condoManager')

.controller('AddAtendimentoController', function($scope, AddAtendimentoService, $localStorage) {

   
    $scope.horario = new AddAtendimentoService();
    $scope.diaSemana = '';
    $scope.horaInicio = '';
    $scope.horaFinal = '';

    $scope.add_horario = () => {

        $scope.horario.cnpj = $localStorage.usuarioLogado.cnpj;
        $scope.horario.hours = $scope.diaSemana + " - " + $scope.horaInicio + " às " + $scope.horaFinal;
        
        $scope.horario.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                console.log("Horário de atendimento adicionado com sucesso!");
            }
        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }

});
