var app = angular.module('condoManager', 
    ['ngRoute',
     'ngResource',
     'ngMessages',
     'ngStorage',
     'routeStyles']);

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
    .otherwise({
        redirectTo: '/login'
    });
});

app.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
}]);