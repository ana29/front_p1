angular.module('condoManager')

.factory('LoginService', function($resource, env) {

    //return $resource(env.BASE_API_REMOTE+'/users/login');
    return $resource(env.BASE_API_LOCAL+'/users/login');

});
