angular.module('condoManager')

.factory('ReservarLocalService', function($resource, env) {
    return $resource(env.BASE_API_REMOTE+'/reservations/', null, {
        'update': { method:'PUT'}
    });
});