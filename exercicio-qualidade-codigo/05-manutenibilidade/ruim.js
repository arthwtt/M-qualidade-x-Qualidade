function handleOrder(order){
  // valida, calcula, imprime, envia email, muda status... tudo junto
  if(!order || !order.items || order.items.length === 0) return "erro"
  let total = 0
  for(const it of order.items){ total += it.price }
  console.log("TOTAL:", total)
  order.status = "paid"
  // fingindo email
  console.log("email enviado para", order.email)
  return { total, status: order.status }
}

console.log(handleOrder({ email:"a@a.com", items:[{price:10},{price:5}] }))