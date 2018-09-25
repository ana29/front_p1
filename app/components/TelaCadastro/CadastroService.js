angular.module('condoManager')

.factory('CadastroService', function($resource, env) {

    //return $resource('https://projetop1.herokuapp.com/condominiums/');
    return $resource(env.BASE_API_LOCAL+'/condominiums/');

});