app.factory('AppService', function () {
    var usuarios = {
        getUsers: function () {

            return JSON.parse(window.localStorage.getItem('users')) || [];


        }
    }
    return usuarios;
});