angular.module('condoManager')

.factory('GetReservasService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/reservations/condominium/:cnpj');

});