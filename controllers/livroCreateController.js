app.controller("livroCreateController", livroCreateController);

function livroCreateController(livroService, $scope, $location){
    $scope.livro = {};
    $scope.title = "Cadastrar";

    function salvar(livro) {
        var livro = livroService.saveLivro(livro);
        livro.then(function sucess(response){
            $location.path('livro')
        },function error(response) {
            console.log(response)
        });
    }

    function listar() {
        var livros = livroService.getLivros();
        livros.then(function sucess(response){
            $scope.listaDeLivros = response.data;
        },function error(response) {
            console.log(response)
        });
    }

    function remover(codigo) {
        debugger;
        var livro = livroService.remover(codigo);
        livro.then(function sucess(response){
            listar();
        },function error(response) {
            console.log(response)
        });
    }

    listar();
    $scope.salvar = salvar;
    $scope.remover = remover;
}