// GET INPUT AND BUTTON

const input$$=document.querySelector("input");
const button$$=document.querySelector("button");
const baseUrl = 'https://api.nationalize.io?name=';

// ERASE LINE FUNCTION

// function borrarFila(event){
//     const deleteButton$$ = event.target;
//     const p$$ = deleteButton$$.parentNode;
//     p$$.remove();
     
// }
const borrarFila = (event) => {
    const deleteButton$$ = event.target;
    const p$$ = deleteButton$$.parentNode;
    p$$.remove();
}

// 
const imprime = (myJson) => {
    const allP$$=document.querySelectorAll("p");
    console.log(allP$$)
    if (allP$$.length != 0){
         for (let index = 0; index < allP$$.length; index++) {
            const element = allP$$[index];
            element.remove();
            
         }
    }
   
    let countries=[];
    let name="";
    let percent=0;
    for (const key in myJson.country) {
        name= myJson.name;
        
        const element = myJson.country[key];
        percent=parseFloat((element.probability)*100).toFixed(2);
        const p$$ = document.createElement("p");
        p$$.innerHTML=`El nombre ${name} tiene un ${percent} por ciento de ser de
         ${element.country_id} <button class="deletebutton">
         DELETE</button>`;
         document.body.appendChild(p$$);
         const deleteButton$$=p$$.querySelector(".deletebutton");
        //console.log(deleteButton$$);
        deleteButton$$.addEventListener("click",borrarFila);
    }
};
             
       
const consulta = ((baseUrl) =>{

    baseUrl=baseUrl+input$$.value;

    fetch(baseUrl)
        .then(response =>(response.json()))
        .then((myJson) => {
       
           imprime(myJson);

    });

});



// BUTTON EVENT THAT SHOTS THE FETCH
button$$.addEventListener("click",function(){consulta(baseUrl)});






