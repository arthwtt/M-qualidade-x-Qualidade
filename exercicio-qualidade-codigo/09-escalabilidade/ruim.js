// Simulando um "banco" enorme carregado inteiro na memória
function getAllUsers() {
  const users = [];
  for (let i = 0; i < 500000; i++) {
    users.push({ id: i, name: `User ${i}` });
  }
  return users;
}

const users = getAllUsers();
console.log("Total users:", users.length);