angular.module('condoManager')

.factory('AddAnuncioService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/announcements/');

});