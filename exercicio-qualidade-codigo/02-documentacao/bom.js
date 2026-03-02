/**
 * Calcula o valor final de um investimento com juros simples.
 *
 * Fórmula:
 *   valorFinal = valorInicial + (valorInicial * taxaMensal * meses)
 *
 * @param {number} principal Valor inicial investido.
 * @param {number} months Quantidade de meses.
 * @param {number} monthlyRate Taxa mensal (ex: 0.015 = 1.5%).
 * @returns {number} Valor final.
 */
function calculateSimpleInterest(principal, months, monthlyRate = 0.015) {
  const interest = principal * monthlyRate * months;
  return principal + interest;
}

console.log(calculateSimpleInterest(1000, 12)); // 1180