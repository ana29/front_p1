angular.module('condoManager')

.factory('AddVisitanteService', function($resource, env, $rootScope, $localStorage) {
    return $resource(env.BASE_API_REMOTE+'/guests/');

});