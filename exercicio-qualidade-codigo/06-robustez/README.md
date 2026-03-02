# 06 – Robustez

## Problema no código ruim
- Não valida tipos
- Divide por zero sem tratamento
- Pode gerar `Infinity` ou resultados errados

## Por que o código bom é melhor
- Falha de forma controlada e explicável
- Evita comportamento inesperado em produção

## O que foi aplicado
- Validação de entrada
- Tratamento de erro com tipos adequados (`TypeError`, `RangeError`)
- Uso de `try/catch` no consumo