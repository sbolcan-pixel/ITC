function calcPayroll(){
  const name=$("emp").value.trim()||"Employee";
  const rate=parseFloat($("rate").value), reg=parseFloat($("reg").value), ot=parseFloat($("ot").value)||0;
  const tbl=$("pay-table");
  if(isNaN(rate)||isNaN(reg)||rate<0||reg<0||ot<0){tbl.style.display="none";return show("pay-msg","Enter a valid rate and hours (no negatives).",true)}
  const regPay=reg*rate, otPay=ot*rate*1.25, gross=regPay+otPay;
  const sss=gross*0.045, phil=gross*0.025, pagibig=Math.min(gross*0.02,200);
  const wtax=taxFor((gross-sss-phil-pagibig)*12)/12;
  const net=gross-sss-phil-pagibig-wtax;
  show("pay-msg",`Payslip for <strong>${name.replace(/</g,"&lt;")}</strong>`);
  const r=(l,v,c)=>`<tr${c?` class="${c}"`:""}><td>${l}</td><td>${peso(v)}</td></tr>`;
  tbl.innerHTML=r("Regular pay",regPay)+r("Overtime pay",otPay)+r("Gross pay",gross,"total")
    +r("SSS",sss)+r("PhilHealth",phil)+r("Pag-IBIG",pagibig)+r("Withholding tax",wtax)+r("Net pay",net,"total");
  tbl.style.display="table";
}
