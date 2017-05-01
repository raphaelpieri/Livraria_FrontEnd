app.controller("livroEditController", livroEditController);

function livroEditController($scope, $routeParams, livroService, $location) {
    var codigo = $routeParams.code;
    $scope.title = "Editar";
    $scope.livro = {};

    function getByCode(cod){
        debugger;
        var livro = livroService.getByCode(cod);
        livro.then(function sucess(response){
            $scope.livro = response.data;
        },function error(response) {
            console.log(response)
        });
    }

    function salvar(livro) {
        var livro = livroService.editar(livro);;
        livro.then(function sucess(response){
            $location.path('livro');
        },function error(response) {
            console.log(response)
        });
    }

    getByCode(codigo);
    $scope.salvar = salvar;

}