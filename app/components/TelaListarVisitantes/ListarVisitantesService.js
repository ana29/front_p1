angular.module('condoManager')

.factory('ListarVisitantesService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/visitors/:cpf_resident');

});