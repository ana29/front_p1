angular.module('condoManager')

.controller('ReservarLocalController', function($scope, $localStorage) {
    
    $scope.eventSources = [];


    $scope.uiConfig = {
        calendar:{
          lang:'pt-br',
          height: "100%",
          editable: true,
          header:{
            left: 'month basicWeek basicDay agendaWeek agendaDay',
            center: 'title',
            right: 'today prev,next'
          },
          dayClick: $scope.alertEventOnClick,
          eventDrop: $scope.alertOnDrop,
          eventResize: $scope.alertOnResize,
        }
    };

    $scope.uiConfig.calendar.dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    $scope.uiConfig.calendar.dayNamesShort = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    $scope.uiConfig.calendar.monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                                           "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];



});