angular.module('condoManager')

.factory('LoginAdminService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/condominiums/login');

});
