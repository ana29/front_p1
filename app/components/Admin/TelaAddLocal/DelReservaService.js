angular.module('condoManager')

.factory('DelReservaService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/reservations/:id');

});