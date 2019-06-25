angular.module('condoManager')

.factory('GetUserService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/users/:cpf');

});