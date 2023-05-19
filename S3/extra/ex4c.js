const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


for (let index = 0; index < countries.length; index++) {
    const element = countries[index];

    // CREO LOS NODOS
    const div$$ = document.createElement("div");
    const h4$$ = document.createElement("h4");
    const img$$ = document.createElement("img");
    const button$$=document.createElement("button");
    
    // AÑADE A LOS NODOS DATOS O CARACTERISTICA
    // o bien con innerHTML en una linea como en la solucion
    h4$$.append(element.title);
    img$$.src=element.imgUrl;
    button$$.textContent="Borrar";
    button$$.id=index;
  

    // AÑADE LOS NODOS H4, IMG Y BOTON COMO HIJOS AL DIV
    div$$.append(h4$$);
    div$$.append(img$$);
    div$$.append(button$$);
    div$$.id=index;

    // AÑADIMOS EL DIV CON SUS HIJOS AL BODY
    document.body.append(div$$);
    button$$.addEventListener("click",function(){ 
        console.log(div$$)
        div$$.remove();
    });
    
}

// function removeEachDiv(evento){
//     console.log(evento)
//     const divToRemove$$ = document.querySelectorAll("div");
//     divToRemove$$[evento].remove();

// }
