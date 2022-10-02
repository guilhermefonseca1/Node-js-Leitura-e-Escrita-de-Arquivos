# Node-js-Leitura-e-Escrita-de-Arquivos
A leitura e escrita de arquivos é uma rotina muito realizada nas operações de back-end. Você pode, por exemplo: 
armazenar os logs da sua aplicação; ler arquivos de configurações para ações específicas; 
exportar dados em um arquivo CSV. 
Sendo assim, é muito importante que, uma boa pessoa desenvolvedora, saiba como fazer a leitura e escrita de arquivos. 
O método disponibilizado pelo módulo fs para leitura síncrona de arquivos é o fs.readFileSync. 
Vamos utilizá-lo no exemplo a seguir, mas antes devemos realizar os seguintes passos:  
1. Criar uma pasta chamada io-local 
2. Iniciar o nosso projeto Node.js usando o comando npm init 
3. Criar um arquivo chamado readFileSync.js 
4. Escrever o seguinte código dentro do arquivo:

const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

5. Importar o módulo fs e criar uma variável chamada nomeDoArquivo, contendo o nome (fixo) do arquivo que vamos ler
6. Chamar o método fs.readFileSync.
7. Rodar o script com node readFileSync.js.

Lendo arquivos com métodos assíncronos
O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile. Esse método possui diferentes formas de retornar a leitura de um arquivo. Neste caso, iremos utilizar o retorno de uma Promise que deve deixar nosso código muito mais legível.

Observação: Para utilizar as operações assíncronas do fs, precisamos alterar a importação do módulo fs para ('fs').promises. Dessa forma, poderemos chamar as funções assíncronas para leitura e escrita de arquivos que retornarão Promises.

Vamos ver como ficaria o código do nosso exemplo anterior, agora de forma assíncrona com o uso de Promises e funções async:

Copiar
const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()
Note que para podermos utilizar o async/await, precisamos criar uma função main e colocar nossa lógica dentro dela. Isso acontece porque o await só pode ser utilizado dentro de funções async.

