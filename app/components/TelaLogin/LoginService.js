angular.module('condoManager')

.factory('LoginService', function($resource, env, $rootScope, $localStorage) {

    //return $resource(env.BASE_API_REMOTE+'/condominiums/login');

    return $resource(env.BASE_API_REMOTE+'/condominiums/login', {}, {
        post: {
            method: 'POST',
            transformResponse: function(data, headers) {
                response = {};
                response.data = data;
                response.headers = headers();
                return response;
            }
        }
    });

});
