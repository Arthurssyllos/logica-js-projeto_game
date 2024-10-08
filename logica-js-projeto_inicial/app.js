alert('Seja bem vindo ao jogo de adivinhação ao número secreto!!');

// definindo um número máximo

let numeroMaximo = 100;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// uma dica ou revelação do número secreto

console.log(numeroSecreto);

let chute; 

// definindo a variável tentativas para cada vez que o jogador tentar

let tentativas = 1;

// enquanto o chute não for igual ao número secreto

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se o número secreto for igual ao chute

    if (numeroSecreto == chute) {

        break;

    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else{
            alert(`O número secreto é menor que ${chute}`);
        }

        tentativas = tentativas + 1;

    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Boaa!! Você acertou o número secreto! Sendo o número secreto o: ${numeroSecreto} e fazendo ${tentativas} ${palavraTentativa}!`);
