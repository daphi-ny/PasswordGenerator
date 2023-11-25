// Função para gerar uma senha
function gerarSenha() {
    // Define os caracteres que serão usados na senha
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    // Define o comprimento da senha
    var senhaLength = 8;
    // Inicializa a senha como uma string vazia
    var senha = '';
    // Loop para adicionar caracteres aleatórios à senha
    for (var i = 0; i < senhaLength; i++) {
        // Gera um número aleatório entre 0 e o número de caracteres
        var randomNum = Math.floor(Math.random() * caracteres.length);
        // Adiciona o caractere correspondente à senha
        senha += caracteres[randomNum];
    }
    // Coloca a senha gerada no campo de entrada
    document.getElementById('senha').value = senha;
}
