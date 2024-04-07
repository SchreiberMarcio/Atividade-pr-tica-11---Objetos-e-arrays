/*
James estava criando uma array com as cores do arco-íris, e ele
esqueceu algumas cores. As cores padrão de um arco-íris são
normalmente listadas nesta ordem:
const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
"Roxo"];

mas James tinha isto:
const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

Usando somente o método splice insira as cores que faltam na array e
remova a cor "Preto", seguindo estes passos:

a. Remova "Preto"
b. Adicione "Amarelo" e "Verde"
c. Adicione "Roxo"
 */

const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"]; // inicio do rainbow ["Vermelho", "Laranja", "Preto", "Azul"]

rainbow.splice(rainbow.indexOf("Preto"), 1); // a. Remove "Preto"

rainbow.splice(2, 0, "Amarelo", "Verde"); // b. Adiciona "Amarelo" e "Verde"

rainbow.push("Roxo"); // c. Adiciona "Roxo"

console.log(rainbow); // ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo"]
