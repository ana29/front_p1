angular.module('condoManager')

.controller('add_horario_atendimento_sindico', function($scope, add_horario_atendimento_sindicoService, $location, $localStorage) {

   /* $scope.funcionario = new AddFuncionarioService();

    $scope.funcionario.condominium_cnpj = $localStorage.usuarioLogado.cnpj;
    $scope.funcionario.permission = 5;

    $scope.cadastrar = () => {
        
        $scope.funcionario.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Salvo com sucesso" };
                alert("Salvo com sucesso!");
            }
        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});

*\
