# 05 – Manutenibilidade

## Problema no código ruim
- Uma função faz tudo (validação, cálculo, side effects)
- Alterações pequenas podem quebrar outras partes

## Por que o código bom é melhor
- Separação de responsabilidades facilita evoluir e debugar
- Cada função tem um motivo claro para existir

## O que foi aplicado
- Funções pequenas e coesas
- Evitar mutação direta do objeto (retornar novo objeto)
- Erros explícitos com `throw`