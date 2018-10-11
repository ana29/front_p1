angular.module('condoManager')

.controller('AddLocalController', function($scope, AddLocalService, $localStorage) {

 $scope.local = new AddLocalService();

 $scope.local.permission = 0;

    $scope.cadastrar = () => {
        
        $scope.local.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Local adicionado com sucesso" };
                console.log("Local adicionado com sucesso");
            }

          
        })


        .catch((erro) => {
	    alert("Não foi possível salvar");
            $scope.mensagem = { texto: "Não foi possível salvar!" };
            console.log(erro);
        });
    }
});
