var app = angular.module('condoManager');

app.directive('menuSidebarElement', function() {
    return {
        restrict: "EAC",
        templateUrl: '/app/partials/menu-sidebar.html'
    }
});

app.directive('headerDesktopElement', function() {
    return {
        restrict: "EAC",
        templateUrl: '/app/partials/header-desktop-element.html'
    }
});