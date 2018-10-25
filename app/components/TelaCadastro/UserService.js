angular.module('condoManager')

.factory('UserService', function($resource, env) {

    //return $resource(env.BASE_API_REMOTE+'/users/');
    return $resource(env.BASE_API_REMOTE+'/users/');

});