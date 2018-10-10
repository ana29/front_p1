angular.module('condoManager')

.factory('ListarAnunciosService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/announcements/');

});