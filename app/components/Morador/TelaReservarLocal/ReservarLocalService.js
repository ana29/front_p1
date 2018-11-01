angular.module('condoManager')

.factory('ReservarLocalService', function($resource, env) {
    return $resource(env.BASE_API_REMOTE+'/reservation/');
});