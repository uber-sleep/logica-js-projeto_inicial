// Mensagem de boas vindas
alert('Boas vindas ao jogo do número secreto');
// Variaveis
const maxNumber = 100;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
let chances;
let index = 1;
// Loop
while(chances != secretNumber) {
	// Input do usuário
	chances = prompt(`Escolha um número de 1 a ${maxNumber}`);
	// Condições
	if (chances == secretNumber) {
		break;
	} else {
		if(chances < secretNumber) {
			alert(`O número secreto era maior que ${chances}`);
		} else {
			alert(`O número secreto era menor que ${chances}`);	
		};
	};
	// Incremento do contador
	index++;
	console.log(index);
};
// Correção da conjugação
let pluralChance = index > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você acertou o número secreto ${secretNumber} com ${index} ${pluralChance}.`);
