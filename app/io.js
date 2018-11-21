angular.module('condoManager')
.factory('socket', function ($rootScope, env, $localStorage) {
    var token = $localStorage.token;
    var server_url = env.BASE_API_REMOTE;
    var socket = io.connect(server_url, {'query' : 'Authorization=' + token});;
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
});