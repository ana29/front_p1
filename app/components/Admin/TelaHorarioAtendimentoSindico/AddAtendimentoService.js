angular.module('condoManager')

.factory('AddAtendimentoService', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/officeHours/');

});
