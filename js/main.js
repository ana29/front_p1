var app = angular.module('condoManager', 
    ['ngRoute',
     'ngResource',
     'ngMessages',
     'ngStorage',
     'ngMaterial']);

app.config(($routeProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    })
    .otherwise({
        redirectTo: '/'
    });
})