const peso = n => "₱" + n.toLocaleString("en-PH",{minimumFractionDigits:2,maximumFractionDigits:2});
const $ = id => document.getElementById(id);
function show(id,html,isErr){const o=$(id);o.innerHTML=html;o.classList.toggle("error",!!isErr)}
function taxFor(income){
  if(income<=250000) return 0;
  if(income<=400000) return (income-250000)*0.15;
  if(income<=800000) return 22500+(income-400000)*0.20;
  if(income<=2000000) return 102500+(income-800000)*0.25;
  if(income<=8000000) return 402500+(income-2000000)*0.30;
  return 2202500+(income-8000000)*0.35;
}
