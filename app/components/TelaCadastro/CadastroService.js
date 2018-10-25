angular.module('condoManager')

.factory('CadastroService', function($resource, env) {

    return {
        registerCondominium: function() {
            //return $resource(env.BASE_API_REMOTE+'/condominiums/');
            return $resource(env.BASE_API_LOCAL+'/condominiums/');
        },
        registerUser: function() {
            //return $resource(env.BASE_API_REMOTE+'/users/')
            return $resource(env.BASE_API_LOCAL+'/users/');
        }
    }

});