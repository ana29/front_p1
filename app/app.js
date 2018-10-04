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
    
    .when('/login', {
        templateUrl: 'app/components/TelaLogin/Login.html',
        css: [
            'app/components/TelaLogin/Login.css'
        ],
        controller: 'LoginController',
        title: 'Condo Manager - Login'
    })
    
    .when('/cadastro', {
        templateUrl: 'app/components/TelaCadastro/Cadastro.html',
        css: [
            'app/components/TelaCadastro/Cadastro.css'
        ],
        controller: 'CadastroController',
        title: 'Condo Manager - Cadastro'
    })
    
    .when('/home_adm', {
        templateUrl: 'app/components/Admin/TelaHome/HomeAdmin.html',
        css: [
            'app/components/Admin/TelaHome/HomeAdmin.css'
        ],
        controller: 'HomeAdminController',
        title: 'Condo Manager - Home'
    })
    
    .when('/home_adm/adicionar_morador', {
        templateUrl: 'app/components/Admin/TelaAddMorador/AddMorador.html',
        css: [
            'app/components/Admin/TelaAddMorador/AddMorador.css'
        ],
        controller: 'AddMoradorController',
        title: 'Condo Manager - Administração'
    })
    
    .when('/home_adm/adicionar_funcionario', {
        templateUrl: 'app/components/Admin/TelaAddFuncionario/AddFuncionario.html',
        css: [
            'app/components/Admin/TelaAddFuncionario/AddFuncionario.css'
        ],
        controller: 'AddFuncionarioController',
        title: 'Condo Manager - Administração'
    })


     .when('/home_adm/adicionar_atendimento', {
        templateUrl: 'app/components/Admin/TelaHorarioAtendimentoSindico/AddAtendimento.html',
        css: [
            'app/components/Admin/TelaHorarioAtendimentoSindico/AddAtendimento.css'
        ],
        controller: 'AddAtendimentoController',
        title: 'Condo Manager - Administração'
    })

    .when('/home_adm/condominios', {
        templateUrl: 'app/components/Admin/TelaListarCondominios/ListarCondominios.html',
        css: [
            'app/components/Admin/TelaListarCondominios/ListarCondominios.css'
        ],
        controller: 'ListarCondominiosController',
        title: 'Condo Manager - Condomínios'
    })
    
    .when('/home_adm/moradores', {
        templateUrl: 'app/components/Admin/TelaListarMoradores/ListarMoradores.html',
        css: [
            'app/components/Admin/TelaListarMoradores/ListarMoradores.css'
        ],
        controller: 'ListarMoradoresController',
        title: 'Condo Manager - Moradores'
    })
    
    .when('/home_morador', {
        templateUrl: 'app/components/Morador/TelaHome/HomeMorador.html',
        css: [
            'app/components/Morador/TelaHome/HomeMorador.css'
        ],
        controller: 'HomeMoradorController',
        title: 'Condo Manager - Home'
    })
    
    .when('/home_morador/adicionar_visitante', {
        templateUrl: 'app/components/Morador/TelaHome/TelaAddVisitante/AddVisitante.html',
        css: [
            'app/components/Morador/TelaHome/TelaAddVisitante/AddVisitante.css'
        ],
        controller: 'AddVisitanteController',
        title: 'Condo Manager - Home'
    })

    .when('/home_funcionario', {
        templateUrl: 'app/components/Funcionario/TelaHome/HomeFuncionario.html',
        css: [
            'app/components/Funcionario/TelaHome/HomeFuncionario.css'
        ],
        controller: 'HomeFuncionarioController',
        title: 'Condo Manager - Home'
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
        '/home_adm/adicionar_funcionario', 
        '/home_adm/adicionar_morador',
        '/home_adm/adicionar_atendimento',
        '/home_adm/moradores',
        '/home_adm/condominios',
        '/home_morador/adicionar_visitante'
    ];
    let rotasBloqueadasAdmin = [
        '/login',
        '/cadastro',
        '/home_morador',
        '/home_funcionario',
        '/home_morador/adicionar_visitante'
    ];
    let rotasBloqueadasMorador = [
        '/login',
        '/cadastro',
        '/home_adm',  
        '/home_funcionario',
        '/home_adm/adicionar_funcionario', 
        '/home_adm/adicionar_morador',
        '/home_adm/adicionar_atendimento',
        '/home_adm/moradores',
        '/home_adm/condominios'
    ];
    let rotasBloqueadasFuncionario = [
        '/login',
        '/cadastro',
        '/home_adm', 
        '/home_morador',
        '/home_adm/adicionar_funcionario', 
        '/home_adm/adicionar_morador',
        '/home_adm/adicionar_atendimento',
        '/home_adm/moradores',
        '/home_adm/condominios',
        '/home_morador/adicionar_visitante'
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
