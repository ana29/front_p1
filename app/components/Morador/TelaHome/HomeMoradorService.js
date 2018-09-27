angular.module('condoManager')

.factory('HomeMoradorService', function($resource, env, $rootScope, $localStorage) {

    return HomeMoradorResource = $resource(env.BASE_API_REMOTE+'/condominiums/login');

});