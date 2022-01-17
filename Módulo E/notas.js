/*function verificaPalindromo(string) {
  if (!string) return "string inválida";
  return string === string.split('').reverse().join('')
  
}
verificaPalindromo('');*/
/*
newFunction();

function newFunction() {
  new Error([message, [fileName, [lineNumber]]]);

  const meuErro = new Error('Mensagem inválida');
  throw meuErro;
}*/

const myPromisse = new Promise((resolve, reject)=>{
  window.setTimeout(()=>{
  resolve('Resolvida');
}, 2000);
});
await myPromisse
       .then((result)=> result+ 'passando pelo then')
       

6
2