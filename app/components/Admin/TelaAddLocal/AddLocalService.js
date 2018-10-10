angular.module('condoManager')

.factory('AddLocalService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/locals/');

});