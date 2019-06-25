angular.module('condoManager')

.factory('DelUsuarioService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/users/:id');

});