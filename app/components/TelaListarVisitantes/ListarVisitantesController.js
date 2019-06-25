angular.module('condoManager')

.controller('ListarVisitantesController', function ($scope, GetUserService, ListarMoradoresService, ListarVisitantesService, $localStorage, DelVisitanteService) {

    $scope.visitantes = [];
    $scope.filtro = '';
    $scope.mensagem = { texto: '' };
    $scope.selecionado = null;
    $scope.moradores = [];
    $scope.userSearch = null;

    let listarMoradores = () => {
        
        ListarMoradoresService.query({cnpj: $localStorage.usuarioLogado.cnpj},(moradores) => {
            $scope.moradores = moradores;
            $scope.mensagem = {};
        },
        
        (erro) => {
            console.log("Não foi possível obter a lista de moradores");
            console.log(erro);

            $scope.mensagem = {
                texto: 'Não foi possível obter a lista de moradores'
            };
        });
    };

    listarMoradores();

    let listarVisitantes = (cpf) => {
        try {
            GetUserService.get({cpf: cpf}, morador => {
                $scope.userSearch = morador;
            });
            
            ListarVisitantesService.query({cpf_resident: cpf},(visitantes) => {
                if ($localStorage.usuarioLogado.role == 'ADMIN' && $localStorage.usuarioLogado.cnpj == $scope.userSearch.cnpj) {
                    $scope.visitantes = visitantes;
                }
                
                else if ($localStorage.usuarioLogado.role == 'RESIDENT') {
                    $scope.visitantes = visitantes;
                }
    
                else {
                    $scope.visitantes = [];
                }
            },
            
            (erro) => {
                console.log("Não foi possível obter a lista de visitantes");
                console.log(erro);
    
                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista de visitantes'
                };
            });
        } catch(erro) {}
        
    };

    let listarVisitantesAdmin = () => {
        $scope.visitantes = [];
        $scope.moradores.map(m => {
            if (m) {
                ListarVisitantesService.query({cpf_resident: m.cpf}, (visitantes) => {
                    visitantes.map(v => {
                        $scope.visitantes.push(v);
                    });
                },(erro) => {
                    console.log("Não foi possível obter a lista de visitantes");
                    console.log(erro);
                });
            }
           
        });

    };

    if ($localStorage.usuarioLogado.role == 'RESIDENT') {
        listarVisitantes($localStorage.usuarioLogado.cpf);
    } else {
        listarVisitantesAdmin();
    }

    $scope.pesquisarVisitantes = (cpf) => {
        if (cpf) {
            if (cpf.length > 0) {
                listarVisitantes(cpf);
                
            } 
        } else {
            listarVisitantesAdmin();
        }
    }

    $scope.selecionaVisitante = (visitante) => {
        $scope.selecionado = visitante;
    }

    $scope.removeVisitante = (visitanteID) => {
        $('#removeVisitante').modal('hide');
        DelVisitanteService.delete({ id: visitanteID }, () => {
            listarVisitantes($localStorage.usuarioLogado.cpf);
        },
            (erro) => {
                console.log("Não foi possível remover o visitante");
                console.log(erro);
            }
        );
    }
});