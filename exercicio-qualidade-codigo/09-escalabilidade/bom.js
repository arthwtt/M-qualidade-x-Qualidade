// Gera sob demanda (streaming/iterador) sem estourar memória
function* userGenerator(total) {
  for (let i = 0; i < total; i++) {
    yield { id: i, name: `User ${i}` };
  }
}

let count = 0;
for (const user of userGenerator(500000)) {
  count++;
  // aqui você poderia processar e salvar/lidar em lotes
}

console.log("Total users processed:", count);