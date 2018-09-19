var app = angular.module('condoManager', 
    ['ngRoute',
     'ngResource',
     'ngMessages',
     'ngStorage',
     'ngMaterial',
     'routeStyles']);

app.config(($routeProvider) => {
    $routeProvider
    .when('/login', {
        templateUrl: 'app/components/TelaLogin/Login.html',
        css: [
            'app/components/TelaLogin/Login.css'
        ],
        controller: 'LoginController'
    })
    .when('/cadastro', {
        templateUrl: 'app/components/TelaCadastro/Cadastro.html',
        css: [
            'app/components/TelaCadastro/Cadastro.css'
        ],
        controller: 'CadastroController'
    })
    .when('/admin', {
        templateUrl: 'app/components/Admin/TelaHome/HomeAdmin.html',
        css: [
            'app/components/Admin/TelaHome/HomeAdmin.css'
        ],
        controller: 'HomeAdminController'
    })
    .when('/admin/adicionar_morador', {
        templateUrl: 'app/components/Admin/TelaAddMorador/AddMorador.html',
        css: [
            'app/components/Admin/TelaAddMorador/AddMorador.css'
        ],
        controller: 'AddMoradorController'
    })
    .otherwise({
        redirectTo: '/login'
    });
})