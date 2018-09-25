angular.module('condoManager')

.factory('ListarMoradoresService', function($resource, env) {

    return $resource(env.BASE_API_LOCAL+'/residents/');

});