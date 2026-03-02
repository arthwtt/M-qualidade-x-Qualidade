function validateOrder(order) {
  if (!order) throw new Error("Order is required");
  if (!Array.isArray(order.items) || order.items.length === 0) {
    throw new Error("Order must have at least one item");
  }
  if (typeof order.email !== "string" || !order.email.includes("@")) {
    throw new Error("Valid email is required");
  }
}

function calculateOrderTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

function markOrderAsPaid(order) {
  return { ...order, status: "paid" };
}

function sendPaymentEmail(email, total) {
  console.log(`email enviado para ${email} com total ${total}`);
}

function handleOrder(order) {
  validateOrder(order);

  const total = calculateOrderTotal(order.items);
  const paidOrder = markOrderAsPaid(order);

  console.log("TOTAL:", total);
  sendPaymentEmail(paidOrder.email, total);

  return { total, status: paidOrder.status };
}

console.log(handleOrder({ email: "a@a.com", items: [{ price: 10 }, { price: 5 }] }));