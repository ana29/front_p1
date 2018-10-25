angular.module('condoManager')

.controller('LoginController', function($scope, $rootScope, LoginService, VisualizarCondominioService, LoginAdminService, LoginResidentService, LoginStaffService, $localStorage, $location) {

    $scope.loginAdmin = new LoginAdminService();
    $scope.loginResident = new LoginResidentService();
    $scope.loginStaff = new LoginStaffService();

    $scope.login = new LoginService();

    $scope.logar = () => {

        $scope.login.$save()

        .then((res) => {

            if ($scope.frm.$valid) {

                VisualizarCondominioService.get({ cnpj: res.cnpj },

                    (condominio) => {
                        res.info_condominio = condominio;
                        console.log(res.info_condominio)
                    },
        
                    (erro) => {
                        console.log("Não foi possível obter o condomínio");
                        console.log(erro);
                    }
                );

                console.log(res.cnpj)

                console.log("Logado com sucesso!");
                $location.path('/home_adm');
                $localStorage.usuarioLogado = res;
                $localStorage.usuarioLogado.info_condominio = $scope.info_condominio;
                $rootScope.usuarioLogado = $localStorage.usuarioLogado;

            }
        })

        .catch((erro) => {
            alert("Não foi possível fazer login");
            console.log(erro);
        });
    }

    $scope.logar_admin = () => {
        
        $scope.loginAdmin.$save()

        .then((res) => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Logado com sucesso" };
                console.log("Logado com sucesso!");
                $location.path("/home_adm");
                $localStorage.usuarioLogado = res;
                $rootScope.usuarioLogado = res;
            }
        })

        .catch((erro) => {
            alert("Não foi possível fazer login");
            $scope.mensagem = { texto: "Não foi possível fazer login!" };
            console.log(erro);
        });
    }

    $scope.logar_resident = () => {
        
        $scope.loginResident.$save()

        .then((res) => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Logado com sucesso" };
                console.log("Logado com sucesso!");
                $location.path("/home_morador");
                $localStorage.usuarioLogado = res;
                $rootScope.usuarioLogado = res;
            }
        })

        .catch((erro) => {
            alert("Não foi possível fazer login");
            $scope.mensagem = { texto: "Não foi possível fazer login!" };
            console.log(erro);
        });
    }

    $scope.logar_staff = () => {
        
        $scope.loginStaff.$save()

        .then((res) => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Logado com sucesso" };
                console.log("Logado com sucesso!");
                $location.path("/home_funcionario");
                $localStorage.usuarioLogado = res;
                $rootScope.usuarioLogado = res;
            }
        })

        .catch((erro) => {
            alert("Não foi possível fazer login");
            $scope.mensagem = { texto: "Não foi possível fazer login!" };
            console.log(erro);
        });
    }

    $rootScope.logout = () => {
        delete $rootScope.usuarioLogado;
        delete $localStorage.usuarioLogado;
    }

});