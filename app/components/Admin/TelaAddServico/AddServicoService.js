angular.module('condoManager')

.factory('AddServicoService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/places/');

});
