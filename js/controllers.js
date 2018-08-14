app.controller("appController", function appController($scope, AppService, $location, $http) {
    let response = AppService.getUsers()
    $scope.usuarios = response.pacientes.concat(response.profesionales);
});


app.controller("infoController", function ($scope, $routeParams) {
    $scope.usuario = $scope.usuarios[$scope.usuarios.findIndex(item => item.id == $routeParams.id)];
    
});


app.controller("infoMedController", function ($scope, $routeParams) {
    $scope.usuario = $scope.usuarios[$scope.usuarios.findIndex(item => item.id == $routeParams.id)];
    
});


app.controller("addController", function ($scope, $location) {
    $scope.textButton = "Añadir nuevo Usuario";
    $scope.usuario = {
        id:`${Date.now()}-${Math.floor(Math.random() * 100)}`,
        datosPersonales: {
            TipoDeUsuario: 'Paciente'
        }
    };

    $scope.newUser = function () {

        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.pacientes.push($scope.usuario)
        window.localStorage.setItem('users', JSON.stringify(myJson));

        $location.url("/");
    }
});



app.controller("addMedController", function ($scope, $location) {
    $scope.textButton = "Añadir nuevo Profesional";
    $scope.usuario = {
        id:`${Date.now()}-${Math.floor(Math.random() * 100)}`,
        datosPersonales: {
            TipoDeUsuario: 'Profesional'
        }
    };

    $scope.newMed = function () {

        console.log($scope.usuario);
        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.profesionales.push($scope.usuario)
        window.localStorage.setItem('users', JSON.stringify(myJson));


        $location.url("/");
    }
});

app.controller("editController", function editController($scope, $routeParams, $location) {
    $scope.textButton = "Editar usuario";
    $scope.usuario = $scope.usuarios[$scope.usuarios.findIndex(item => item.id == $routeParams.id)];
    $scope.editUser = function () {

        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.pacientes[ myJson.pacientes.findIndex(item => item.id == $routeParams.id)]  = $scope.usuario;

        window.localStorage.setItem('users', JSON.stringify(myJson));

        $location.url('/');
    }
});

//prueba

app.controller("editMedController", function ($scope, $routeParams, $location) {
    $scope.textButton = "Editar Profesional";
    $scope.usuario = $scope.usuarios[$scope.usuarios.findIndex(item => item.id == $routeParams.id)];
    

    $scope.editUserMed = function () {
     
        
        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.profesionales[ myJson.profesionales.findIndex(item => item.id == $routeParams.id)]  = $scope.usuario;

        window.localStorage.setItem('users', JSON.stringify(myJson));

        $location.url('/');
    }
});


app.controller("removeController", function ($scope, $routeParams, $location) {
    $scope.usuario = $scope.usuarios[$scope.usuarios.findIndex(item => item.id == $routeParams.id)];
    $scope.removeUser = function () {

        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.pacientes.splice(myJson.pacientes.findIndex(item => item.id == $routeParams.id), 1);

        window.localStorage.setItem('users', JSON.stringify(myJson));

        $location.url('/');
    }
});





app.controller("removeAllController", function ($scope, $routeParams, $location) {
    $scope.usuario = $scope.usuarios[$scope.usuarios.findIndex(item => item.id == $routeParams.id)];

    $scope.removeAll = function () {

        let myJson = JSON.parse(window.localStorage.getItem('users'));
        myJson.profesionales = myJson.profesionales.filter(item => item.datosPersonales.TipoDeProfesional !== 'Medico');

        window.localStorage.setItem('users', JSON.stringify(myJson));

        $location.url('/');
    }
});

