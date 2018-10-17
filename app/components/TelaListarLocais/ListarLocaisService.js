angular.module('condoManager')

.factory('ListarLocaisService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/places/:cnpj');

});