# 04 – Reutilização

## Problema no código ruim
- Código duplicado em duas funções idênticas
- A regra do "10%" está espalhada

## Por que o código bom é melhor
- Centraliza a regra em funções reutilizáveis
- Menos duplicação = menos chance de inconsistência

## O que foi aplicado
- Extração de funções (`applyPercentage`, `calculateTotalWithFee`)
- Uso de `reduce` para expressar intenção