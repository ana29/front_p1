angular.module('condoManager')

.factory('LoginResidentService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/residents/login');

});
