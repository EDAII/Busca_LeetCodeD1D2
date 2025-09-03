/*
QUESTÃO: 17. Letter Combinations of a Phone Number
LINK: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?envType=problem-list-v2&envId=hash-table
TIPO DE PROBLEMA: HASH TABLE
DIFICULDADE: MÉDIO

Given a string containing digits from 2-9 inclusive,
return all possible letter combinations that the number could represent. 
Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below.
Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = ""
Output: []

Example 3:

Input: digits = "2"
Output: ["a","b","c"]

Constraints:

    0 <= digits.length <= 4
    digits[i] is a digit in the range ['2', '9'].
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  // HASH TABLE: Mapeia os dígitos de cada letra ao número
  const mapeamentoDigitos = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const resultadoCombinacoes = [];

  function gerarCombinacoes(indiceAtual, combinacaoAtual) {
    if (indiceAtual === digits.length) {
      resultadoCombinacoes.push(combinacaoAtual);
      return;
    }

    const digitoAtual = digits[indiceAtual];
    const letrasDoDigito = mapeamentoDigitos[digitoAtual];

    for (let i = 0; i < letrasDoDigito.length; i++) {
      const letraAtual = letrasDoDigito[i];
      gerarCombinacoes(indiceAtual + 1, combinacaoAtual + letraAtual);
    }
  }

  gerarCombinacoes(0, "");

  return resultadoCombinacoes;
};
