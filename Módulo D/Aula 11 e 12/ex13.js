var agora = new Date()
var dia = agora.getDay()
dia = 5
/*
0 = Domingo 
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta 
6 = Sábado
*/
switch(dia){
  case 0:
    console.log("Domingo")
    break
  case 1:
    console.log("Segunda")
    break
  case 2:
    console.log("terça")
    break
  case 3:
    console.log("Quarta")
    break
  case 4:
    console.log("Quinta")
    break
  case 5:
    console.log("sexta")
    break //só parou no sexta por conta do break, sem ele ele escreveria todas as condições após a essa.
  case 6:
    console.log("Sabado")
    break
  default:
    console.log("Dia inválido")
}
  

  

