angular.module('condoManager')

.factory('add_horario_atendimento_sindico', function($resource, env) {

    return $resource(env.BASE_API_REMOTE+'/staff/');

});
