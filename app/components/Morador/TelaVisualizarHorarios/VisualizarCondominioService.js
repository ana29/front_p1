angular.module('condoManager')

.factory('VisualizarCondominioService', function($resource, env) {
    return $resource(env.BASE_API_REMOTE+'/condominiums/:cnpj');
});