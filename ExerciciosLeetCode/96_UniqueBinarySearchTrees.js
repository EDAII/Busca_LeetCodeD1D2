/*
QUESTÃO: 96. Unique Binary Search Trees
LINK: https://leetcode.com/problems/unique-binary-search-trees/description/?envType=problem-list-v2&envId=binary-search-tree
TIPO DE PROBLEMA: ÁRVORE BINÁRIA DE BUSCA
DIFICULDADE: MÉDIO

Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

Example 1:

1        1                   2             3          3
  \       \                 / \           /          /
    3      2               1   3         2          1
  /         \                           /            \
2            3                         1              2

Input: n = 3
Output: 5

Example 2:

Input: n = 1
Output: 1

Constraints:

  1 <= n <= 19
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const tabelaResultados = new Array(n + 1).fill(0);

  tabelaResultados[0] = 1;
  tabelaResultados[1] = 1;

  for (let quantidadeNos = 2; quantidadeNos <= n; quantidadeNos++) {
    for (let noRaiz = 1; noRaiz <= quantidadeNos; noRaiz++) {
      const nosEsquerda = noRaiz - 1;      const nosDireita = quantidadeNos - noRaiz;

      const arvoresPossiveis =
        tabelaResultados[nosEsquerda] * tabelaResultados[nosDireita];

      tabelaResultados[quantidadeNos] += arvoresPossiveis;
    }
  }

  return tabelaResultados[n];
};
