function getN(outId){
  const n=Number($("n").value);
  if(!Number.isInteger(n)||n<1){show(outId,"Enter a whole number of 1 or more.",true);return null}
  return n;
}
function doFactorial(){
  const n=getN("fact-out"); if(n===null) return;
  if(n>1000) return show("fact-out","Use N of 1000 or less for factorial.",true);
  let i=1, f=1n;
  while(i<=n){ f*=BigInt(i); i++; }
  const s=f.toString();
  show("fact-out",`${n}! = <strong>${s.length>60?s.slice(0,30)+"… ("+s.length+" digits)":s}</strong>`);
}
function doSum(){
  const n=getN("sum-out"); if(n===null) return;
  let i=1, sum=0;
  do { sum+=i; i++; } while(i<=n);
  show("sum-out",`1 + 2 + … + ${n} = <strong>${sum.toLocaleString()}</strong>`);
}
function doAvg(){
  const n=getN("avg-out"); if(n===null) return;
  let total=0;
  for(let i=1;i<=n;i++){ total+=i; }
  show("avg-out",`Average of 1 to ${n} = <strong>${(total/n).toLocaleString(undefined,{maximumFractionDigits:2})}</strong>`);
}
