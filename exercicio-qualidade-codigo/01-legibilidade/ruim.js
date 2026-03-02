function f(a,b,c){
  let x=0
  for(let i=0;i<a.length;i++){
    if(a[i].p>c && a[i].s===b){x+=a[i].p}
  }
  return x
}

const arr=[{p:10,s:"ok"},{p:50,s:"ok"},{p:5,s:"no"}]
console.log(f(arr,"ok",9))