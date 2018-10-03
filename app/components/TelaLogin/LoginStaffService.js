angular.module('condoManager')

.factory('LoginStaffService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/staff/login');

});
