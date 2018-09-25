angular.module('condoManager')

.factory('ListarCondominiosService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/condominiums/');

});