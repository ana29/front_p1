angular.module('condoManager')

.factory('DelVisitanteService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/visitors/:id');

});