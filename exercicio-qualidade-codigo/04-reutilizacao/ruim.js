function totalA(items){
  let t=0
  for(const i of items){ t += i.price + i.price*0.1 }
  return t
}

function totalB(items){
  let t=0
  for(const i of items){ t += i.price + i.price*0.1 }
  return t
}

console.log(totalA([{price: 100}]), totalB([{price: 200}]))