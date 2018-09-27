angular.module('condoManager')

.factory('AddFuncionarioService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/residents/');

});
