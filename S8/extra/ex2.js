const date= new Date();
const baseUrl="http://localhost:3000/diary";
// const data=[];


// FETCH EN FUNCION ASINCRONA Y EL RETURN DEVUELVE EL OBJETO O ARRAY
// CUANDO SE LE LLAMA DESDE OTRA FUNCION ASINCRONA TAMBIEN
const getDataAsync = async()=>{
    const query = await fetch(baseUrl)
    const myJson = await query.json();
    return myJson
}


// FUNCION QUE RECOJE EL OBJETO OBTENIDO DEL FETCH A LA URL DE 
// LA API Y QUE PODEMOS TRATAR 
const dataAsync = async()=>{
    const fullData = await getDataAsync();
    //console.log(fullData)
    const dateOrdered = fullData.sort((a,b)=> new Date(a.date) - new Date(b.date));
    //console.log(dateOrdered)
    dateOrdered.forEach(element => {
        const div$$=document.createElement("div");
        div$$.innerHTML=`<h3>${element.title}</h3><h5>${element.date}</h5><p>${element.description}</p>`
        
        const button$$=document.createElement("button")
        button$$.textContent="BORRAR";
        button$$.addEventListener("click",function(){deleterow(div$$)})
        div$$.appendChild(button$$);
        document.body.appendChild(div$$);
        
    });
}

dataAsync()

const deleterow = (divToDelete$$) =>{
    console.log(divToDelete$$)
    divToDelete$$.remove();
}