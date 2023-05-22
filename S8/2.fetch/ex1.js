
fetch("https://api.agify.io?name=michael")
.then((answer)=>answer.json())
.then((receivedJson)=> {
   
   imprime(receivedJson)
});

// function imprime(objeto){
//     //document.body.appendChild(objeto.age);
//     console.log(objeto)
//    const h1$$= document.createElement("h1");
//    h1$$.innerHTML=`age: ${objeto.age} -- count: ${objeto.count} -- name: ${objeto.name} `;
//    document.body.append(h1$$)
// }

const imprime = ((objeto)=>{
    //document.body.appendChild(objeto.age);
    console.log(objeto);
   const h1$$= document.createElement("h1");
   h1$$.innerHTML=`age: ${objeto.age} -- count: ${objeto.count} -- name: ${objeto.name} `;
   document.body.append(h1$$);
});