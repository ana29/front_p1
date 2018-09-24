angular.module('condoManager')

.factory('CadastroService', function($resource, $http) {
        /*$http.get('https://projetop1.herokuapp.com')
        .then(function (data) {
            this.teste = data.body.teste;
        })
        .catch(function (err) {
            console.log(err);
        });
        */
       return $resource('https://projetop1.herokuapp.com/condominiums/');
    
    /*$http.get('https://projetop1.herokuapp.com/condominiums/')
        .then(function(data) {
            return data.body.teste;
        })
        .catch((error) => {
            console.log(error);
        });*/
});