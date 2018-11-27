angular.module('condoManager')

.factory('DelLocalService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/places/:id');

});