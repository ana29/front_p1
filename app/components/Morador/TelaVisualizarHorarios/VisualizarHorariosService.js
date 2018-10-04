angular.module('condoManager')

.factory('VisualizarHorariosService', function($resource, env) {
    return $resource(env.BASE_API_REMOTE+'/officeHours/:cnpj');
});