angular.module('condoManager')

.controller('ReservarLocalController', function($scope, $localStorage, GetReservasService, ListarLocaisService, ListarMoradoresService, ReservarLocalService) {
    
$scope.changeMode = function (mode) {
    $scope.mode = mode;
};

$scope.today = function () {
  $scope.currentDate = new Date();
};

$scope.isToday = function () {
  var today = new Date(),
      currentCalendarDate = new Date($scope.currentDate);

  today.setHours(0, 0, 0, 0);
  currentCalendarDate.setHours(0, 0, 0, 0);
  return today.getTime() === currentCalendarDate.getTime();
};

$scope.onEventSelected = function (event) {
  $('#detalheReserva').modal('show');
  $scope.event = event;
};
$scope.onTimeSelected = function (selectedTime, events) {
  console.log('Selected time: ' + selectedTime + ' hasEvents: ' + (events !== undefined && events.length !== 0));
};

$scope.reservarLocal = new ReservarLocalService();

$scope.realizaReserva = (reservaId) => {

  ReservarLocalService.update({
    id: reservaId,
    residentId: $localStorage.usuarioLogado.id,
    occupied: true
  }, function() {
    console.log("OK");
    $scope.carregaReservas();
  }, function(erro) {
    console.log("Erro ao realizar reserva", erro);
  });


};

$scope.cancelaReserva = (reservaId) => {

  ReservarLocalService.update({
    id: reservaId,
    residentId: -1,
    occupied: false
  }, function() {
    console.log("OK");
    $scope.carregaReservas();
  }, function(erro) {
    console.log("Erro ao cancelar reserva", erro);
  });

}

$scope.carregaReservas = () => {
  let todasReservas = [];
  let todosLocais = [];
  let eventos = [];
  let residents = [];

  GetReservasService.query({cnpj: $localStorage.usuarioLogado.cnpj}, (reservas) => {
    
    todasReservas = reservas;

    ListarLocaisService.query({cnpj: $localStorage.usuarioLogado.cnpj}, (locais) => {
      todosLocais = locais;

      ListarMoradoresService.query({cnpj: $localStorage.usuarioLogado.cnpj},(moradores) => {
        residents = moradores;

        todasReservas.forEach(reserva => {
          eventos.push({
            title: todosLocais.filter(obj => { return obj.id == reserva.placeId })[0].place_name,
            placeId: todosLocais.filter(obj => { return obj.id == reserva.placeId })[0].id,
            startTime: reserva.startTime,
            endTime: reserva.endTime,
            allDay: false,
            owner: (reserva.residentId>0) ? residents.filter(obj => { return obj.id == reserva.residentId})[0].name : null,
            ownerId: (reserva.residentId>0) ? reserva.residentId : null,
            reservationId: reserva.id,
            occupied: reserva.occupied,
            description: todosLocais.filter(obj => { return obj.id == reserva.placeId })[0].about
          })
        });
  
        $scope.eventSource = eventos;

      });

    });
    
  });

};

});