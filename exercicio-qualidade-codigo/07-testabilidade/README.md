# 07 – Testabilidade

## Problema no código ruim
- Depende do relógio do sistema dentro da função
- Difícil criar testes determinísticos

## Por que o código bom é melhor
- Permite mock/injeção de dependência
- Testes ficam previsíveis e repetíveis

## O que foi aplicado
- Injeção de dependência via parâmetro (`nowProvider`)
- Exemplo de execução em modo "teste"