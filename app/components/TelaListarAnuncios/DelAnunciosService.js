angular.module('condoManager')

.factory('DelAnunciosService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/announcements/:id');

});