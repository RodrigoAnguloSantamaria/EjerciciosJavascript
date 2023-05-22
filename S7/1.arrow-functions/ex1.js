let a=10;
let b=5;
// function resultado(){
//     return a+b;
// }

const resultado1 =()=>a+b;
//const resultado = () => (a+b);

console.log("sin parametros: "+resultado1());

let aa=10;
let bb=5;
const resultado2 = (a) => a+bb;
console.log("con un parametro: "+resultado2(a));