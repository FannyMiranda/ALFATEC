app.controller("appController", function appController($scope, AppService, $location, $http) {
    let response = AppService.getUsers()
    // .then(function(response){
    //console.log(response);

    //console.log("entramos en factory");
    //console.log($scope);
    console.log(typeof (response.pacientes))
    $scope.usuarios = response.pacientes;
    //console.log('data'+JSON.stringify(data));



    //});

});

app.controller("infoController", function infoController($scope, $routeParams) {
    $scope.usuario = $scope.usuarios[$routeParams.id];
});

//prueba
app.controller("infoMedController", function infoController($scope, $routeParams) {
    $scope.usuario = $scope.usuarios[$routeParams.id];
});
//

app.controller("addController", function addController($scope, $location) {
    $scope.textButton = "Añadir nuevo Usuario";
    $scope.usuario = {};



    $scope.newUser = function () {

        console.log($scope.usuario);
        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.pacientes.push($scope.usuario)
        window.localStorage.setItem('users', JSON.stringify(myJson));
        //AppServiceAddUser.getJson($scope.usuario);

        $location.url("/");
    }
});

//prueba

app.controller("addMedController", function addController($scope, $location) {
    $scope.textButton = "Añadir nuevo Profesional";
    $scope.usuario = {};

    $scope.newMed = function () {

        console.log($scope.usuario);
        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.profesionales.push($scope.usuario)
        window.localStorage.setItem('users', JSON.stringify(myJson));
        //AppServiceAddUser.getJson($scope.usuario);

        $location.url("/");
    }
});
//Hasta aqui

app.controller("editController", function editController($scope, $routeParams, $location) {
    $scope.textButton = "Editar usuario";
    $scope.usuario = $scope.usuarios[$routeParams.id];
    $scope.editUser = function () {


        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.pacientes[$routeParams.id] = $scope.usuario;

        window.localStorage.setItem('users', JSON.stringify(myJson));


        //$scope.usuarios[$routeParams.id] = $scope.usuario;
        $location.url('/');
    }
});

//prueba
app.controller("editMedController", function editController($scope, $routeParams, $location) {
    $scope.textButton = "Editar Profesional";
    $scope.usuario = $scope.usuarios[$routeParams.id];
    $scope.editUserMed = function () {


        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.profesionales[$routeParams.id] = $scope.usuario;

        window.localStorage.setItem('users', JSON.stringify(myJson));


        //$scope.usuarios[$routeParams.id] = $scope.usuario;
        $location.url('/');
    }
});

//hasta aqui
app.controller("removeController", function removeController($scope, $routeParams, $location) {
    $scope.usuario = $scope.usuarios[$routeParams.id];
    $scope.removeUser = function () {

        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.pacientes.splice($routeParams.id, 1);

        window.localStorage.setItem('users', JSON.stringify(myJson));

        $location.url('/');
    }
});

app.controller("removeAllController", function removeController($scope, $routeParams, $location) {
    $scope.usuario = $scope.usuarios[$routeParams.id];
    $scope.removeAll = function () {

        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.profesionales = [];

        window.localStorage.setItem('users', JSON.stringify(myJson));

        $location.url('/');
    }
});




/*app.controller("removeAllController", function removeAllController($scope, $routeParams, $location) {
    console.log($scope.usuarios);
    $scope.removeAll = function () {
        window.localStorage.setItem('users', JSON.stringify(myJson));

        $scope.usuarios.length === 0;
        console.log($scope.usuarios);
        $location.url('/');
    }
    

});*/


