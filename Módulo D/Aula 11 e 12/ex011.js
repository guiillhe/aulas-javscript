var idade = 69
console.log(`Sua idade é ${idade}`)
if (idade<16){
  console.log("Ainda não vota")
}else if(idade<18||idade>=70 ){
  console.log("Voto Facultativo")
}else{
  console.log("Voto obrrigatório!!")
}