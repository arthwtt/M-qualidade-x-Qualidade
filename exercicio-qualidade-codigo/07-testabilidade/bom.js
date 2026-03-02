function buildMessage(name, nowProvider) {
  const now = nowProvider();
  return `Oi ${name}, agora são ${now}`;
}

// Em produção: injeta Date real
const message = buildMessage("Arthur", () => new Date().toISOString());
console.log(message);

// Em teste: injeta data fixa
const testMessage = buildMessage("Arthur", () => "2026-03-02T00:00:00.000Z");
console.log("TEST:", testMessage);