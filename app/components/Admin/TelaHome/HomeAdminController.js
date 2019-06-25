angular.module('condoManager')

.controller('HomeAdminController', function($scope, $rootScope, $localStorage, AddAnuncioService, 
    ListarMoradoresService, $location, GetReservasService, ListarVisitantesService) {
    $scope.nomeApp = 'Condo Manager';
    $rootScope.usuarioLogado = $localStorage.usuarioLogado;
    $scope.statusError = false;
    $scope.moradores = [];
    $scope.reservas = [];
    $scope.visitantes = [];

    $rootScope.logout = () => {
        delete $rootScope.usuarioLogado;
        delete $localStorage.usuarioLogado;
    }

    $scope.anuncio = new AddAnuncioService();

    $scope.cadastrarAnuncio = () => {
        
        $scope.anuncio.cnpj = $localStorage.usuarioLogado.cnpj;
        $scope.anuncio.$save()

        .then(() => {
            if ($scope.frm.$valid) {
                $scope.statusError = false;
                console.log("Anúncio adicionado com sucesso!");
            }
            $scope.anuncio = new AddAnuncioService();
            $scope.anuncio.announcement = '';

        })

        .catch((erro) => {
            alert("Não foi possível salvar");
            $scope.statusErro = true;
            console.log(erro);
        });
    }

    let listarMoradores = () => {
        
        try {
            ListarMoradoresService.query({cnpj: $localStorage.usuarioLogado.cnpj},(moradores) => {
                $scope.moradores = moradores;
                $scope.mensagem = {};

                $scope.moradores.map(m => {
                    ListarVisitantesService.query({cpf_resident: m.cpf}, (visitantes) => {
                        visitantes.map(v => {
                            $scope.visitantes.push(v);
                        });
                    },(erro) => {
                        console.log("Não foi possível obter a lista de visitantes");
                        console.log(erro);
                    });
                })
            },
        
            (erro) => {
                console.log("Não foi possível obter a lista de moradores");
                console.log(erro);

                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista de moradores'
                };
            });
        } catch(error) {
            console.log("Usuário não encontrado")
        }
    };

    listarMoradores();

    let listarReservas = () => {
        GetReservasService.query({cnpj: $localStorage.usuarioLogado.cnpj}, (reservas) => {
            $scope.reservas = reservas;
        },
        
        () => {
            console.log("Não foi possível obter a lista de reservas")
        });
    };

    listarReservas();

    $scope.verLink = (path) => {
        $location.path(path);
    }
    

});