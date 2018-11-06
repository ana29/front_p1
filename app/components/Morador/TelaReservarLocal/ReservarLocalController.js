angular.module('condoManager')

.controller('ReservarLocalController', function($scope, $localStorage) {
    
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

$scope.loadEvents = function () {
  $scope.eventSource = createRandomEvents();
};

$scope.onEventSelected = function (event) {
  $scope.event = event;
};
$scope.onTimeSelected = function (selectedTime, events) {
  console.log('Selected time: ' + selectedTime + ' hasEvents: ' + (events !== undefined && events.length !== 0));
};


var eventos2 = [
  {
    allDay: false,
    endTime: new Date("Tue Nov 13 2018 10:26:00 GMT-0300"),
    startTime: new Date("Tue Nov 13 2018 07:42:00 GMT-0300"),
    title: "Event - 0"
  }
]

function createRandomEvents() {
  var events = [];
/*
  for (var i = 0; i < 10; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
          startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
          if (endDay === startDay) {
              endDay += 1;
          }
          endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
          events.push({
              title: 'All Day - ' + i,
              startTime: startTime,
              endTime: endTime,
              allDay: true
          });
      } else {
          var startMinute = Math.floor(Math.random() * 24 * 60);
          var endMinute = Math.floor(Math.random() * 180) + startMinute;
          startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
          endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
          
          events.push({
              title: 'Event - ' + i,
              startTime: startTime,
              endTime: endTime,
              allDay: false
          });

      }
  }
*/
  events = eventos2;
  console.log(events);
  console.log(eventos2);
  return events;
}



});