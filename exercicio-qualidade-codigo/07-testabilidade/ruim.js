function getNow() {
  return new Date().toISOString();
}

function buildMessage(name) {
  return `Oi ${name}, agora são ${getNow()}`;
}

console.log(buildMessage("Arthur"));