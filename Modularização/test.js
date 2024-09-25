const { verificarVitoriaIminente, checkWinner } = require('./game');

// Função de teste para verificarVitoriaIminente
function testVerificarVitoriaIminente() {
    // Configuração do tabuleiro
    var board = [
        ['', '', 'X'],
        ['', 'O', ''],
        ['X', 'O', 'X']
    ];

    // Jogador atual é 'X'
    var jogador = 'O';

    // Chamar a função verificarVitoriaIminente
    var jogada = verificarVitoriaIminente(board, jogador);

    // Verificar se a jogada retornada é a esperada
    if (jogada && jogada.row === 0 && jogada.col === 1) {
        console.log("Teste passou: A jogada iminente foi identificada corretamente.");
    } else {
        console.log("Teste falhou: A jogada iminente não foi identificada corretamente.");
    }
}

// Executar o teste
testVerificarVitoriaIminente();