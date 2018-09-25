angular.module('condoManager')

.factory('CadastroService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/condominiums/');

});