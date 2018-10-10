angular.module('condoManager')

.factory('AListarLocaisService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/locals/');

});