const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    const div$$ = document.createElement("div");
    const h4$$ = document.createElement("h4");
    const img$$ = document.createElement("img");
    h4$$.append(element.title);
    img$$.src=element.imgUrl;
    div$$.append(h4$$);
    div$$.append(img$$);
    document.body.append(div$$);
    
}

const button$$=document.createElement("button");
button$$.textContent="Borrar";
document.body.appendChild(button$$);
button$$.addEventListener("click", removeLastDiv);


function removeLastDiv(evento){
    const lastDiv$$ = document.querySelectorAll("div");
    //lastDiv$$=lastDiv$$[lastDiv$$.length-1];
    lastDiv$$[lastDiv$$.length-1].remove();
}