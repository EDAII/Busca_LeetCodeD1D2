/*
QUESTÃO: 04. Median of Two Sorted Arrays
LINK: https://leetcode.com/problems/median-of-two-sorted-arrays/description/?envType=problem-list-v2&envId=binary-search
TIPO DE PROBLEMA: BUSCA BINÁRIA
DIFICULDADE: DIFÍCIL

Given two sorted arrays nums1 and nums2 of size m and n respectively,
return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const tamanhoTotal = nums1.length + nums2.length;

  if (tamanhoTotal % 2 === 1) {
    const posicaoMediana = Math.floor(tamanhoTotal / 2);
    return encontrarKesimoElemento(nums1, nums2, posicaoMediana + 1);
  }
  else {
    const posicaoEsquerda = Math.floor(tamanhoTotal / 2);
    const posicaoDireita = posicaoEsquerda + 1;

    const elementoEsquerda = encontrarKesimoElemento(
      nums1,
      nums2,
      posicaoEsquerda
    );
    const elementoDireita = encontrarKesimoElemento(
      nums1,
      nums2,
      posicaoDireita
    );

    return (elementoEsquerda + elementoDireita) / 2.0;
  }

  function encontrarKesimoElemento(array1, array2, k) {
    if (array1.length > array2.length) {
      return encontrarKesimoElemento(array2, array1, k);
    }

    const tamanho1 = array1.length;

    if (tamanho1 === 0) {
      return array2[k - 1];
    }

    if (k === 1) {
      return Math.min(array1[0], array2[0]);
    }

    const metadeK = Math.floor(k / 2);
    const indice1 = Math.min(metadeK, tamanho1) - 1;
    const indice2 = k - Math.min(metadeK, tamanho1) - 1;

    if (array1[indice1] < array2[indice2]) {
      const novoArray1 = array1.slice(indice1 + 1);
      const novoK = k - (indice1 + 1);
      return encontrarKesimoElemento(novoArray1, array2, novoK);
    } else {
      const novoArray2 = array2.slice(indice2 + 1);
      const novoK = k - (indice2 + 1);
      return encontrarKesimoElemento(array1, novoArray2, novoK);
    }
  }
};