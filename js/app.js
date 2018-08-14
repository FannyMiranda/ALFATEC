var app = angular.module('app', ['ngRoute']);
var myApp = angular.module('myApp', []);


//rutas
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: 'appController'
        })
        .when("/info/:id", {
            templateUrl: 'templates/info.html',
            controller: 'infoController'
        })


        .when("/infoMed/:id", {
            templateUrl: 'templates/infoMed.html',
            controller: 'infoMedController'
        })

        .when("/add", {
            title: 'Añadir usuario',
            templateUrl: 'templates/add.html',
            controller: 'addController'
        })

        .when("/addMed", {
            title: 'Añadir nuevo Profesional',
            templateUrl: 'templates/addMed.html',
            controller: 'addMedController'
        })

        .when("/edit/:id", {
            title: 'Editar Usuario',
            templateUrl: 'templates/edit.html',
            controller: 'editController'
        })


        .when("/editMed/:id", {
            title: 'Editar Profesional',
            templateUrl: 'templates/editMed.html',
            controller: 'editMedController'
        })

        .when("/remove/:id", {
            title: 'Eliminar usuario',
            templateUrl: 'templates/remove.html',
            controller: 'removeController'
        })

        .when("/removeAll", {
            templateUrl: "templates/removeAll.html",
            controller: 'removeAllController'
        })

        .otherwise({
            redirectTo: "/"
        })
});