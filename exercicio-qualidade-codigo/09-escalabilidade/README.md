# 09 – Escalabilidade

## Problema no código ruim
- Carrega tudo em memória de uma vez
- Não aguenta crescimento de volume de dados

## Por que o código bom é melhor
- Processa por demanda (lazy) e reduz consumo de memória
- Facilita processar em lotes

## O que foi aplicado
- Generator (`function*`) para produzir dados sob demanda
- Processamento incremental