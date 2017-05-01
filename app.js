var app = angular.module("app", ["ngRoute", "ui.mask"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:"templates/home.html",
        controller:"mainController"
    })
    .when('/livro', {
        templateUrl:"templates/livro.html",
        controller:"livroCreateController"
    })
    .when('/livro/cadastrar', {
        templateUrl:"templates/livro-form.html",
        controller:"livroCreateController"
    })
    .when('/livro/:code/editar', {
        templateUrl:"templates/livro-form.html",
        controller:"livroEditController"
    })
    .otherwise({
        redirectTo: "/"
    });
});

app.config(function($locationProvider){
    $locationProvider.hashPrefix('');
});

