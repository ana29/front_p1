angular.module('condoManager')

.controller('LoginController', function($scope, $rootScope, LoginAdminService, LoginResidentService, LoginStaffService, $localStorage, $location) {

    $scope.loginAdmin = new LoginAdminService();
    $scope.loginResident = new LoginResidentService();
    $scope.loginStaff = new LoginStaffService();

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