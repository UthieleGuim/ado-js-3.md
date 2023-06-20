"use strict";

// EXERCÍCIO 0 - ANTES DE MAIS NADA, IMPLEMENTE ESTA FUNÇÃO.
/**
 * Função que retorna um Array contendo os nomes dos alunos que fizeram este exercício.
 * @return {string[]} Os nomes dos alunos que fizeram este exercício.
 */
function nomesDosAlunos() {
    return [ "Uthiele","Guilherme Eirale" ];
}

// EXERCÍCIO 1.
/**
 * Receba um valor em graus e converta para radianos.
 * @param {number} graus O valor em graus.
 * @return {number} O valor em radianos.
 * @throws ConvertError Se o valor em graus não for um número finito.
 */
function grausParaRadianos(graus) {
    if (isNaN(graus) || !Number.isFinite(graus)) {
        throw new ConvertError('O valor em graus não é um número finito.');
      }
    
      return (graus * Math.PI) / 180;
    
}

// EXERCÍCIO 2.
/**
 * Receba um valor em radianos e converta para graus.
 * @param {number} graus O valor em radianos.
 * @return {number} O valor em graus.
 * @throws ConvertError Se o valor em radianos não for um número finito.
 */
function radianosParaGraus(radianos) {
    if (isNaN(radianos) || !Number.isFinite(radianos)) {
        throw new ConvertError('O valor em radianos não é um número finito.');
      }
      
      return (radianos * 180) / Math.PI;
}

// EXERCÍCIO 3.
/**
 * Converta uma temperatura entre 3 possíveis escalas: Celsius, Kelvin e Fahreinheit. As escalas são especificadas pelas strings "C", "F" e "K".
 * Zero graus Celsius é o mesmo que 32 graus Fahreinheit ou 273.15 graus Kelvin.
 * 100 graus Celsius é o mesmo que 212 graus Fahreinheit ou 373.15 graus Kelvin.
 * Os valores resultantes devem ser arredondados em 2 casas decimais. Use a função auxiliar arredondar2Casas para fazer isso.
 * @param {number} valor O valor da temperatura na escala especificada pelo parâmetro "de".
 * @param {string} de A escala da temperatura especificada pelo parâmetro "valor". Pode ser "K" para Kelvin, "C" para Celsius ou "F" para Fahreinheit.
 * @param {string} para A escala da temperatura a ser retornada. Pode ser "K" para Kelvin, "C" para Celsius ou "F" para Fahreinheit.
 * @return {number} O valor da temperatura correspondente.
 * @throw ConvertError Se o valor não for um número finito ou se qualquer uma das escalas for diferente de "C", "F" ou "K".
 */
function converterTemperatura(valor, de, para) {
    return Math.round(valor * 100) / 100;
}

function converterTemperatura(valor, de, para) {
  if (isNaN(valor) || !Number.isFinite(valor)) {
    throw new ConvertError('O valor da temperatura não é um número finito.');
  }

  const escalasValidas = ['C', 'F', 'K'];
  if (!escalasValidas.includes(de) || !escalasValidas.includes(para)) {
    throw new ConvertError('Escala de temperatura inválida.');
  }

  let resultado;

  if (de === 'C') {
    if (para === 'F') {
      resultado = (valor * 9 / 5) + 32;
    } else if (para === 'K') {
      resultado = valor + 273.15;
    } else {
      resultado = valor;
    }
  } else if (de === 'F') {
    if (para === 'C') {
      resultado = (valor - 32) * 5 / 9;
    } else if (para === 'K') {
      resultado = (valor + 459.67) * 5 / 9;
    } else {
      resultado = valor;
    }
  } else if (de === 'K') {
    if (para === 'C') {
      resultado = valor - 273.15;
    } else if (para === 'F') {
      resultado = (valor * 9 / 5) - 459.67;
    } else {
      resultado = valor;
    }
  }

  return arredondar2Casas(resultado);
}

// EXERCÍCIO 4.
/**
 * Obtenha o fatorial de um número.
 * @param {number} n O valor do qual se deseja obter o fatorial.
 * @return {bigint} O valor de n! expresso em BigInt.
 * @throw ConvertError Se o parâmetro não for um número inteiro ou for menor que zero.
 */
function fatorial(n) {
    if (isNaN(n) || !Number.isInteger(n) || n < 0) {
        throw new ConvertError('O parâmetro não é um número inteiro válido ou é menor que zero.');
      }
    
      let resultado = BigInt(1);
      for (let i = 2; i <= n; i++) {
        resultado *= BigInt(i);
      }
    
      return resultado;
}

// EXERCÍCIO 5.
/**
 * Obtenha o n-ésimo número de Fibonacci.
 *
 * Dica:
 * Cuidado ao implementar essa função! A implementação mais direta pode demorar séculos para fornecer
 * o resultado de um número de Fibonacci grande. Mas uma implementação um pouco mais inteligente que
 * memorize resultados já anteriormente computados trás o mesmo resultado em microssegundos.
 *
 * @param {number} n O valor do qual se deseja obter o número de Fibonacci correspondente.
 * @return {bigint} n O n-ésimo número de Fibonacci expresso em BigInt.
 * @throw ConvertError Se o parâmetro não for um número inteiro ou for menor que zero.
 */
function fibonacci(n) {
    if (isNaN(n) || !Number.isInteger(n) || n < 0) {
        throw new ConvertError('O parâmetro não é um número inteiro válido ou é menor que zero.');
      }
    
      let a = BigInt(0);
      let b = BigInt(1);
    
      if (n === 0) {
        return a;
      }
    
      for (let i = 2; i <= n; i++) {
        let temp = b;
        b += a;
        a = temp;
      }
    
      return b;
}

// EXERCÍCIO 6.
/**
 * Obtenha o n-ésimo número triangular.
 *
 * @param {n} n O valor do qual se deseja obter o número triangular correspondente.
 * @return {bigint} n O n-ésimo número triangular expresso em BigInt.
 * @throw ConvertError Se o parâmetro não for um número inteiro ou for menor que zero.
 */
function triangular(n) {
    if (typeof n !== 'bigint' || n < 0n) {
      throw new ConvertError('O parâmetro não é um número inteiro válido ou é menor que zero.');
    }
  
    if (n === 0n) {
      return 0n;
    }
  
    let triangular = (n * (n + 1n)) / 2n;
    return triangular;
}

// EXERCÍCIO 7.
/**
 * Retorne uma expressão regular que valide um CEP da seguinte forma:
 * Cinco dígitos, talvez um hífen, mais três dígitos.
 * É importante que a expressão regular tenha menos que 25 caracteres de comprimento!
 * @return {RegExp} Uma expressão regular.
 */
function cepRegex() {
    return /^\d{5}-?\d{3}$/;
}

// EXERCÍCIO 8.
/**
 * Retorne uma expressão regular que valide um número de DDD brasileiro.
 * É importante que a expressão regular tenha menos que 60 caracteres de comprimento!
 * @return {RegExp} Uma expressão regular.
 */
function dddRegex() {
    return /^\d{2}$/;
}

// EXERCÍCIO 9.
/**
 * Utilizando AJAX ou fetch API, pesquise por um CEP na URL http://viacep.com.br/ws/XXXXX-XXX/json/,
 * onde XXXXX-XXX é o CEP a ser pesquisado.
 * @param {string} cep O CEP a ser pesquisado.
 * @return {Endereco} Uma instância da classe Endereco contendo o logradouro, bairro, localidade (cidade) e UF do CEP pesquisado.
 * @throws ConvertError Se o CEP a ser pesquisado não for uma string ou não tiver o formato correto de um CEP.
 * @throws PesquisaCepError Se o CEP não for encontrado.
 */
async function pesquisarCep(cep) {
  if (typeof cep !== 'string' && !/^\d{5}-\d{3}$/.test(cep)) {
    throw new ConvertError('CEP inválido');
  }

  const url = `http://viacep.com.br/ws/${cep}/json/`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new PesquisaCepError('CEP não encontrado');
      }
      return response.json();
    })
    .then(data => {
      if (data.hasOwnProperty('erro')) {
        throw new PesquisaCepError('CEP não encontrado');
      }
      
      return new Endereco(
        data.logradouro,
        data.bairro,
        data.localidade,
        data.uf
      );
    });
}

// EXERCÍCIO 10.
/**
 * Faça o formulário na tela de pesquisa de CEP. Você o encontra facilmente no HTML.
 *
 * No campo do resultado do CEP, você deve colocar as informações do CEP encontrado
 * (converta a instância de Endereco encontrada em string para fazer isso). Se ocorrer
 * algum erro na busca, coloque a mensagem de erro lá também (use o try-catch para isso).
 */
async function pesquisarCepDOM() {
    var cep = document.getElementById("cep").value;
    var resultado = document.getElementById("resultado-cep");

    // Limpar campo de resultado
    document.getElementById("resultado-cep").value = "";

    // Verificar se o CEP está vazio
    if (cep === "") {
        document.getElementById("resultado-cep").value = "Por favor, digite um CEP.";
        return;
    }
  
    const url = `http://viacep.com.br/ws/${cep}/json/`;
  
    return fetch(url)
      .then(response => {
        if (!response.ok) {
            document.getElementById("resultado-cep").value = "";
          return
        }
        return response.json();
      })
      .then(data => {
        const { logradouro, bairro, localidade, uf } = data;
        
        document.getElementById("resultado-cep").value = logradouro+' - '+bairro+' - '+localidade+' - '+uf;
      })
      .catch(error => {
        document.getElementById("resultado-cep").value = error;
      });
}

// EXERCÍCIO 11.
/**
 * Utilizando AJAX ou fetch API, pesquise por um CEP na URL https://pokeapi.co/api/v2/pokemon/NNNNNN,
 * onde NNNNNN é o número ou nome de um pokémon a ser pesquisado.
 * @param {number | string} chave O número ou nome do pokémon a ser pesquisado.
 * @return {Pokemon} Uma instância da classe Pokemon contendo o nome, o número e a URL da foto da arte oficial do pokémon visto de frente.
 * @throws PokemonNaoEncontradoError Se não existir pokémon com o nome ou número dado.
 */
async function pesquisarPokemon(chave) {
  const url = `https://pokeapi.co/api/v2/pokemon/${chave}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new PokemonNaoEncontradoError("Pokemon não encontrado");
    }
    
    const data = await response.json();
    const nome = data.name;
    const numero = data.id;
    const urlFoto = data.sprites.other["official-artwork"].front_default;
    
    if (!nome || !numero || !urlFoto) {
      throw new PokemonNaoEncontradoError("Dados do Pokemon inválidos");
    }
    
    return new Pokemon(nome, numero, urlFoto);
  } catch (error) {
    throw error;
  }
}

// EXERCÍCIO 12.
/**
 * Faça o formulário na tela de pesquisa de pokémon. Você o encontra facilmente no HTML.
 *
 * Há três campos para os resultados: O nome do pokémon, o número e uma imagem.
 * Se ocorrer algum erro na busca, coloque a mensagem de erro no campo do nome e coloque
 * o link https://cdn-icons-png.flaticon.com/256/4467/4467515.png na foto (use o try-catch).
 */
async function pesquisarPokemonDOM() {
  const inputPesquisa = document.getElementById('pokemon-pesquisa');
  const inputNome = document.getElementById('pokemon-nome');
  const inputNumero = document.getElementById('pokemon-numero');
  const imagemPokemon = document.getElementById('pokemon-foto');

  const pesquisaPokemon = inputPesquisa.value.trim();

  // Limpar campos
  inputNome.value = '';
  inputNumero.value = '';
  imagemPokemon.src = '';

  try {
    if (pesquisaPokemon === '') {
      throw new Error('Digite o nome ou o número do Pokémon.');
    }

    let url;

    if (pesquisaPokemon !== '') {
      url = `https://pokeapi.co/api/v2/pokemon/${pesquisaPokemon.toLowerCase()}`;
    } else {
      url = `https://pokeapi.co/api/v2/pokemon/${pesquisaPokemon}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Pokémon não encontrado.');
    }

    const data = await response.json();

    // Atualizar campos com os resultados
    inputNome.value = data.name;
    inputNumero.value = data.id;
    imagemPokemon.src = data.sprites.other["official-artwork"].front_default;
    imagemPokemon.alt = data.name;
  } catch (error) {
    inputNome.value = error.message;
    imagemPokemon.src = 'https://cdn-icons-png.flaticon.com/256/4467/4467515.png';
    imagemPokemon.alt = 'Erro';
  }
}