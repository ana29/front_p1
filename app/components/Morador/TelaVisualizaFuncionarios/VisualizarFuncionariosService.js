angular.module('condoManager')

.factory('VisualizarFuncionariosService', function($resource, env) {
    return $resource(env.BASE_API_REMOTE+'/staff');
});