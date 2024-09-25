// Função verificarVitoriaIminente
function verificarVitoriaIminente(board, jogador) {
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            if (board[row][col] == '') {
                // Simula a jogada
                board[row][col] = jogador;
                if (checkWinner(board) == jogador) {
                    // Desfaz a jogada
                    board[row][col] = '';
                    return { row: row, col: col };
                }
                // Desfaz a jogada
                board[row][col] = '';
            }
        }
    }
    return null;
}

// Função para verificar o vencedor
function checkWinner(board) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] == board[i][1] && board[i][1] == board[i][2]) return board[i][0];
        if (board[0][i] && board[0][i] == board[1][i] && board[1][i] == board[2][i]) return board[0][i];
    }
    if (board[0][0] && board[0][0] == board[1][1] && board[1][1] == board[2][2]) return board[0][0];
    if (board[0][2] && board[0][2] == board[1][1] && board[1][1] == board[2][0]) return board[0][2];
    return null;
}

// Exportar funções para uso em testes
module.exports = { verificarVitoriaIminente, checkWinner };