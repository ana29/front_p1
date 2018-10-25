angular.module('condoManager')

.factory('VisualizarNotificacoesService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/places/:cnpj');

});