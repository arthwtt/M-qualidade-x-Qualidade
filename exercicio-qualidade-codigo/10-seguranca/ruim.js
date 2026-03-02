function buildSqlQuery(email) {
  // SQL Injection: o atacante pode fechar aspas e injetar SQL
  return `SELECT * FROM users WHERE email = '${email}'`;
}

const userInput = "a@a.com' OR '1'='1";
console.log(buildSqlQuery(userInput));