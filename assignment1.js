function convert(id,fn,unit){
  const raw=$(id).value;
  if(raw===""||isNaN(raw)) return show(id+"-out","Enter a number to convert.",true);
  show(id+"-out",`${raw} = <strong>${fn(parseFloat(raw)).toFixed(2)} ${unit}</strong>`);
}
