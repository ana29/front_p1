var app = angular.module('condoManager', 
    ['ngRoute',
     'ngResource',
     'ngMessages',
     'ngStorage',
     'routeStyles',
     'moment-picker']);

app.constant('env', {
    BASE_API_LOCAL: 'http://localhost:3000',
    BASE_API_REMOTE: 'https://projetop1.herokuapp.com'
})

app.config(($routeProvider) => {
    $routeProvider
    
    //Login
    .when('/login', {
        templateUrl: 'app/components/TelaLogin/Login.html',
        css: [
            'app/components/TelaLogin/Login.css'
        ],
        controller: 'LoginController',
        title: 'Condo Manager - Login'
    })
    
    //Cadastro
    .when('/cadastro', {
        templateUrl: 'app/components/TelaCadastro/Cadastro.html',
        css: [
            'app/components/TelaCadastro/Cadastro.css'
        ],
        controller: 'CadastroController',
        title: 'Condo Manager - Cadastro'
    })
    
    //Admin
    .when('/home_adm', {
        templateUrl: 'app/components/Admin/TelaHome/HomeAdmin.html',
        css: [
            'app/components/Admin/TelaHome/HomeAdmin.css'
        ],
        controller: 'HomeAdminController',
        title: 'Condo Manager - Home'
    })
    
    //Admin
    .when('/adicionar_morador', {
        templateUrl: 'app/components/Admin/TelaAddMorador/AddMorador.html',
        css: [
            'app/components/Admin/TelaAddMorador/AddMorador.css'
        ],
        controller: 'AddMoradorController',
        title: 'Condo Manager - Administração'
    })
    
    //Admin
    .when('/adicionar_funcionario', {
        templateUrl: 'app/components/Admin/TelaAddFuncionario/AddFuncionario.html',
        css: [
            'app/components/Admin/TelaAddFuncionario/AddFuncionario.css'
        ],
        controller: 'AddFuncionarioController',
        title: 'Condo Manager - Administração'
    })

    //Admin
    .when('/adicionar_servico', {
        templateUrl: 'app/components/Admin/TelaAddServico/AddServico.html',
        css: [
            'app/components/Admin/TelaAddServico/AddServico.css'
        ],
        controller: 'AddServicoController',
        title: 'Condo Manager - Administração'
    })

    //Admin
    .when('/adicionar_atendimento', {
        templateUrl: 'app/components/Admin/TelaHorarioAtendimentoSindico/AddAtendimento.html',
        css: [
            'app/components/Admin/TelaHorarioAtendimentoSindico/AddAtendimento.css'
        ],
        controller: 'AddAtendimentoController',
        title: 'Condo Manager - Administração'
    })

    //Admin
    .when('/condominios', {
        templateUrl: 'app/components/Admin/TelaListarCondominios/ListarCondominios.html',
        css: [
            'app/components/Admin/TelaListarCondominios/ListarCondominios.css'
        ],
        controller: 'ListarCondominiosController',
        title: 'Condo Manager - Condomínios'
    })
    
    //Admin
    .when('/moradores', {
        templateUrl: 'app/components/Admin/TelaListarMoradores/ListarMoradores.html',
        css: [
            'app/components/Admin/TelaListarMoradores/ListarMoradores.css'
        ],
        controller: 'ListarMoradoresController',
        title: 'Condo Manager - Moradores'
    })

    //Admin
    .when('/adicionar_local', {
        templateUrl: 'app/components/Admin/TelaAddLocal/AddLocal.html',
        css: [
            'app/components/Admin/TelaAddLocal/AddLocal.css'
        ],
        controller: 'AddLocalController',
        title: 'Condo Manager - Adicionar Local de Reserva'
    })

    //Admin
    .when('/adicionar_anuncio', {
        templateUrl: 'app/components/Admin/TelaAddAnuncio/AddAnuncio.html',
        css: [
            'app/components/Admin/TelaAddAnuncio/AddAnuncio.css'
        ],
        controller: 'AddAnuncioController',
        title: 'Condo Manager - Adicionar Anúncio'
    })
    
    //Morador
    .when('/home_morador', {
        templateUrl: 'app/components/Morador/TelaHome/HomeMorador.html',
        css: [
            'app/components/Morador/TelaHome/HomeMorador.css'
        ],
        controller: 'HomeMoradorController',
        title: 'Condo Manager - Home'
    })
    
    //Morador
    .when('/adicionar_visitante', {
        templateUrl: 'app/components/Morador/TelaAddVisitante/AddVisitante.html',
        css: [
            'app/components/Morador/TelaAddVisitante/AddVisitante.css'
        ],
        controller: 'AddVisitanteController',
        title: 'Condo Manager - Adicionar Visitante'
    })

    //Ambos
    .when('/visualizar_funcionarios', {
        templateUrl: 'app/components/Morador/TelaVisualizaFuncionarios/VisualizarFuncionarios.html',
        css: [
            'app/components/Morador/TelaVisualizaFuncionarios/VisualizarFuncionarios.css'
        ],
        controller: 'VisualizarFuncionariosController',
        title: 'Condo Manager - Visualizar Funcionários'
    })

    //Ambos
    .when('/visualizar_visitantes', {
        templateUrl: 'app/components/TelaListarVisitantes/ListarVisitantes.html',
        css: [
            'app/components/TelaListarVisitantes/ListarVisitantes.css'
        ],
        controller: 'ListarVisitantesController',
        title: 'Condo Manager - Visitantes'
    })

    //Morador
    .when('/horarios_atendimento', {
        templateUrl: 'app/components/Morador/TelaVisualizarHorarios/VisualizarHorarios.html',
        css: [
            'app/components/Morador/TelaVisualizarHorarios/VisualizarHorarios.css'
        ],
        controller: 'VisualizarHorariosController',
        title: 'Condo Manager - Horários de Atendimento'
    })

    //Funcionario
    .when('/home_funcionario', {
        templateUrl: 'app/components/Funcionario/TelaHome/HomeFuncionario.html',
        css: [
            'app/components/Funcionario/TelaHome/HomeFuncionario.css'
        ],
        controller: 'HomeFuncionarioController',
        title: 'Condo Manager - Home'
    })

    //Ambos
    .when('/visualizar_anuncios', {
        templateUrl: 'app/components/TelaListarAnuncios/ListarAnuncios.html',
        css: [
            'app/components/TelaListarAnuncios/ListarAnuncios.css'
        ],
        controller: 'ListarAnunciosController',
        title: 'Condo Manager - Anúncios'
    })

    //Ambos
    .when('/visualizar_locais', {
        templateUrl: 'app/components/TelaListarLocais/ListarLocais.html',
        css: [
            'app/components/TelaListarLocais/ListarLocais.css'
        ],
        controller: 'ListarLocaisController',
        title: 'Condo Manager - Locais'
    })
        
    .otherwise({
        redirectTo: '/login'
    });
});

app.run(function($rootScope, $route, $localStorage, $location) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });

    $rootScope.usuarioLogado = $localStorage.usuarioLogado || null;

    let rotasBloqueadasNaoLogados = [
        '/home_adm', 
        '/home_morador', 
        '/home_funcionario',
        '/adicionar_funcionario', 
        '/adicionar_morador',
        '/adicionar_atendimento',
        '/moradores',
        '/condominios',
        '/adicionar_visitante',
        '/visualizar_funcionarios',
        '/adicionar_local',
        '/adicionar_anuncio',
	'/adicionar_servico'
    ];
    let rotasBloqueadasAdmin = [
        '/login',
        '/cadastro',
        '/home_morador',
        '/home_funcionario',
        '/adicionar_visitante'
    ];
    let rotasBloqueadasMorador = [
        '/login',
        '/cadastro',
        '/home_adm',  
        '/home_funcionario',
        '/adicionar_funcionario', 
        '/adicionar_morador',
        '/adicionar_atendimento',
        '/moradores',
        '/condominios',
        '/adicionar_local',
        '/adicionar_anuncio',
	'/adicionar_servico'
    ];
    let rotasBloqueadasFuncionario = [
        '/login',
        '/cadastro',
        '/home_adm', 
        '/home_morador',
        '/adicionar_funcionario', 
        '/adicionar_morador',
        '/adicionar_atendimento',
        '/moradores',
        '/condominios',
        '/adicionar_visitante',
        '/visualizar_funcionarios',
        '/adicionar_local',
        '/adicionar_anuncio',
	'/adicionar_servico'
    ];

    $rootScope.$on('$locationChangeStart', function() {
        
        // Bloqueio Usuario não logado
        if ($rootScope.usuarioLogado == null &&
            rotasBloqueadasNaoLogados.indexOf($location.path()) != -1) {

            $location.path('/login');
        }

        // Bloqueio Usuario Admin
        if ($rootScope.usuarioLogado.permission == 0 &&
            rotasBloqueadasAdmin.indexOf($location.path()) != -1) {

            $location.path('/home_adm');
        }

        // Bloqueio Usuario Morador
        if ($rootScope.usuarioLogado.permission == 10  &&
            rotasBloqueadasMorador.indexOf($location.path()) != -1) {

            $location.path('/home_morador');
        }

        // Bloqueio Usuario Funcionário
        if ($rootScope.usuarioLogado.permission == 5 &&
            rotasBloqueadasFuncionario.indexOf($location.path()) != -1) {

            $location.path('/home_funcionario');
        }
    })
});
