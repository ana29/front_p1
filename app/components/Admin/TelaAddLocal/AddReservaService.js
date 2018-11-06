angular.module('condoManager')

.factory('AddReservaService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/reservations/');

});