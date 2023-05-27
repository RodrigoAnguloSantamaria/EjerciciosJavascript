

const query = async ()=>{
    const call = await fetch("https://api.thecatapi.com/v1/images/search");
    const myJson = await call.json();
    return myJson
}

const addCat = (catData)=>{
    //console.log(catData)
    catData.forEach(cat => {
        const section$$=document.createElement("section");
        const img$$=document.createElement("img");
        img$$.src=cat.url;
        img$$.style="width:200px;height:200px"
        section$$.appendChild(img$$);
        const deleteButton$$=document.createElement("button");
        deleteButton$$.textContent="ELIMINAR";
        deleteButton$$.addEventListener("click",function(){removeSection(section$$)});
        section$$.appendChild(deleteButton$$);
        
        document.body.appendChild(section$$);
       
    });
    const removeSection =(section$$)=>{
        section$$.remove();
    }
}

const cat = async()=>{
    const catData = await query();
    //console.log(catData)
    const button$$ = document.createElement("button");
    button$$.textContent="Call a cat"
    button$$.addEventListener("click",function(){addCat(catData)});

    document.body.append(button$$);
    
}
cat();

