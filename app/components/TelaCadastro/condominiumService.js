angular.module('condoManager')

.factory('CondominiumService', function($resource, env) {

    //return $resource(env.BASE_API_REMOTE+'/condominiums/');
    return $resource(env.BASE_API_LOCAL+'/condominiums/');

});