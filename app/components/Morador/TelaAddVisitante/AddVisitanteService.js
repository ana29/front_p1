angular.module('condoManager')

.factory('AddVisitanteService', function($resource, env) {
    return $resource(env.BASE_API_REMOTE+'/visitors/');
});