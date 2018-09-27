var app = angular.module('condoManager', 
    ['ngRoute',
     'ngResource',
     'ngMessages',
     'ngStorage',
     'routeStyles']);

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
    .otherwise({
        redirectTo: '/login'
    });
});

app.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
}]);