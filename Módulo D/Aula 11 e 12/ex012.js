/*var data = new Date()
var hora = data.getHours() Hora do sistema*/
hora = 13
console.log(`Agora são ${hora} horas`)
if(hora<12 && hora>=6){
  console.log("bom dia")
}else if(hora>=12){
  console.log("Boa tarde")
}else if(hora>=18 && hora<=23){
  console.log("boa noite");
} else{
  console.log("boa madrugada")
}
