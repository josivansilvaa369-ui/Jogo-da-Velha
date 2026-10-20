const casas = document.querySelectorAll('.casa');
const mensagem = document.getElementById('mensagem');
const reiniciar = document.getElementById('reiniciar');

let jogadorAtual = 'X';
let jogoAtivo = true;

const combinacoesVitoria = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], ];

function clicarCasa() {
    if (this.textContent !== "" || !jogoAtivo){
        return;
    }

    this.textContent = jogadorAtual;

    if (verificarVitoria()) {
        mensagem.textContent = `Jogador ${jogadorAtual} venceu!`;
        jogoAtivo = false;
        return;
    }

    if (verificarEmpate()) {
        mensagem.textContent = "Empate!";
        jogoAtivo = false;
        return;
    }

    if (jogadorAtual === "X") {
        jogadorAtual = "O";
    } else {
        jogadorAtual = "X";
        mensagem.textContent = `vez do ${jogadorAtual}`;
    }
}

function verificarVitoria(){
    for (let combinacao of combinacoesVitoria) {
        const a = casas[combinacao[0]].textContent;
        const b = casas[combinacao[1]].textContent;
        const c = casas[combinacao[2]].textContent;

        if (a !== "" && a === b && b === c) {
            return true;
        }
    }
    return false;
}

function verificarEmpate() {
    for (let casa of casas) {
        if (casa.textContent === "") {
            return false;
        }
    }
    return true;
}

function reiniciarJogo(){
    for (let casa of casas) {
        casa.textContent = "";
    }
    jogadorAtual = "X";
    jogoAtivo = true;
    mensagem.textContent = `vez do ${jogadorAtual}`;
}

for (let casa of casas){
    casa.addEventListener('click', clicarCasa);
}

reiniciar.addEventListener('click', reiniciarJogo);
