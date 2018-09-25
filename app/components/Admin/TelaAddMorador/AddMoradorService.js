angular.module('condoManager')

.factory('AddMoradorService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/residents/');

});