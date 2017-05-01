app.factory("livroService", livroService);

function livroService($http){
    var produtos = [];
    var url = 'http://localhost:62731/book';
    function getLivros(){
        return $http.get(url);
    }

    function saveLivro(livro){
        return $http.post(url, livro);
    }

    function getByCode(codigo){
        return $http.get(url+"/"+ codigo);
    }

    function editar(livro){
        return $http.put(url, livro);
    }

    function remover(id){
        return $http.post(url+"Remove/"+ id);
    }

    return {
        getLivros: getLivros,
        saveLivro: saveLivro,
        getByCode: getByCode,
        editar: editar,
        remover: remover
    }
}