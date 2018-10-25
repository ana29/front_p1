angular.module('condoManager')

.controller('LoginController', function($scope, $rootScope, LoginService, VisualizarCondominioService, $localStorage, $location) {

    $scope.login = new LoginService();

    $scope.logar = () => {

        $scope.login.$save()

        .then((res) => {

            if ($scope.frm.$valid) {

                VisualizarCondominioService.get({ cnpj: res.cnpj },

                    (condominio) => {
                        res.info_condominio = condominio;
                    },
        
                    (erro) => {
                        console.log("Não foi possível obter o condomínio");
                        console.log(erro);
                    }
                );

                console.log("Logado com sucesso!");
                $location.path('/home_adm');
                $localStorage.usuarioLogado = res;
                $rootScope.usuarioLogado = res;

            }
        })

        .catch((erro) => {
            alert("Não foi possível fazer login");
            console.log(erro);
        });
    }

    $rootScope.logout = () => {
        delete $rootScope.usuarioLogado;
        delete $localStorage.usuarioLogado;
    }

});