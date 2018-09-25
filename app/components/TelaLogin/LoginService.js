angular.module('condoManager')

.factory('LoginService', function($resource, env, $rootScope, $localStorage) {

    return LoginResource = $resource(env.BASE_API_REMOTE+'/condominiums/login');

});

/*var condomanager = angular.module('condoManager');

condomanager.service('LoginService', ['$q', '$http', function ($q, $http) {

    var user = {status: false};

    // return available functions for use in the controllers
    return ({
        login: login,
    });

    function login(user) {
        // create a new instance of deferred
        var deferred = $q.defer();

        $http.post('/condominiums/', user)
            .then(function (data) {
                if (data.status === 200) {
                    deferred.resolve();
                } else {
                    deferred.reject();
                }
            })
            .catch(function (error) {
                deferred.reject(error.data);
            });

        return deferred.promise;
    }
}]);*/