function calcTax(){
  const raw=$("income").value, inc=parseFloat(raw);
  if(raw===""||isNaN(inc)||inc<0) return show("tax-out","Enter an income of 0 or more.",true);
  const t=taxFor(inc), rate=inc>0?(t/inc*100):0;
  show("tax-out",`Income tax: <strong>${peso(t)}</strong><br>Take-home after tax: ${peso(inc-t)}<br>Effective rate: ${rate.toFixed(2)}%`);
}
