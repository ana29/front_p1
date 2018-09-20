var app = angular.module('condo_manager', 
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