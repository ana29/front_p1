angular.module('condoManager')

.controller('LoginController', function($scope, $rootScope, LoginService, $localStorage, $location) {

    $scope.userLogin = new LoginService();

    $scope.logar = () => {
        
        $scope.userLogin.$save()

        .then((res) => {
            if ($scope.frm.$valid) {
                $scope.mensagem = { texto: "Logado com sucesso" };
                alert("Logado com sucesso!");
                $location.path("/home_adm");
                console.log(res);
                console.log(res.headers);
                console.log(res.data);
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

    $scope.login = () => {
        if ($scope.cnpj != null && $scope.password != null) {
            LoginService.loginUser($scope.cnpj, $scope.password).then(
                (res) => {
                    $localStorage.token = res.token;
                    $rootScope.token = res.token;
                    //$location.path('/');
                    console.log(res);
                },

                (err) => {
                    alert("CNPJ ou senha incorreto(s)");
                    console.log(err);
                }
            )
        } else {
            alert("Erro!");
        }
    };

    $rootScope.token = $localStorage.token;
})
/*var condomanager = angular.module('condoManager');

condomanager.controller('LoginController', ['$scope', '$location', '$timeout', '$routeParams', 'LoginService', function($scope, $location, $timeout, $routeParams, LoginService) {

    $scope.submitForm = function() {
        var user = {
            cnpj: $scope.cnpj,
            password: $scope.input
        };

        if ($scope.userForm.$valid) {
            LoginService.login(user)
                // handle success
                .then(function () {
                    
                    $timeout(function() {
                        $location.path('/home');
                        }, 1500);
                })
                // handle error
                .catch(function (error) {
                    var dangerMessage = error.err;

                });
        };
    };
}]);*/