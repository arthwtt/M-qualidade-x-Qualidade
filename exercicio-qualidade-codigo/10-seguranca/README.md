# 10 – Segurança

## Problema no código ruim
- Concatena input do usuário direto em SQL
- Permite SQL Injection

## Por que o código bom é melhor
- Usa query parametrizada (prepared statement)
- Valida entrada e reduz risco de ataques

## O que foi aplicado
- Separação `query` + `params`
- Validação/sanitização de input
- Erros explícitos