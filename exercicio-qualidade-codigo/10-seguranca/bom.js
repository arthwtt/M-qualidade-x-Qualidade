function buildSafeQuery() {
  // Exemplo de prepared statement / parameterized query
  // (Aqui é só simulação; em libs reais você passaria query + params)
  const query = "SELECT * FROM users WHERE email = ?";
  return query;
}

function sanitizeEmail(email) {
  if (typeof email !== "string") throw new TypeError("email must be a string");
  const trimmed = email.trim();

  // validação simples (para demo)
  if (!trimmed.includes("@") || trimmed.length > 254) {
    throw new Error("invalid email format");
  }

  return trimmed;
}

try {
  const userEmail = sanitizeEmail("a@a.com' OR '1'='1");
  const query = buildSafeQuery();
  const params = [userEmail];

  console.log("Query:", query);
  console.log("Params:", params);
} catch (error) {
  console.error("Erro:", error.message);
}