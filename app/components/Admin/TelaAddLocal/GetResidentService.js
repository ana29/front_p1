angular.module('condoManager')

.factory('GetResidentService', function($resource, env) {
    return $resource(env.BASE_API_REMOTE+'/residents/resident/:id');
});