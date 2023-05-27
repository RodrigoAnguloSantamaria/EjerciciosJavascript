const url="http://localhost:3000/characters?_page=";
let numPage=1;
const limit="&_limit=5";
const divGallery$$=document.querySelector(".b-gallery");
const button$$=document.createElement("button");
button$$.addEventListener("click", async function(){await query(url+numPage+limit)})



const printGallery=(myJson)=>{
    console.log(myJson)
    //const divRow$$=document.createElement("div");
    for (let index=0; index <5;index++){
        item = myJson[index];
        const item$$=document.createElement("section");
        item$$.className="b-gallery__item";
        item$$.innerHTML=`<p class="b-gallery__text">${item.name}</p><img src="${item.image}" class="b-gallery__img">`;
        divGallery$$.appendChild(item$$);
        
    }
    
        button$$.className="b-button";
        button$$.textContent="Cargar más";
        divGallery$$.appendChild(button$$);
        numPage++;
        if(numPage==5){button$$.remove()}
        //divGallery$$.appendChild(divRow$$)
}



const query= async (url)=>{
    console.log(numPage)
    const call=await fetch(url);
    const myJson= await call.json();
    
       
    printGallery(myJson);
    
}

const init= async ()=>{
    await query(url+numPage+limit) 
    

} 
init();