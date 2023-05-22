const input$$=document.querySelector("input");
const button$$=document.querySelector("button");
const baseUrl = 'https://api.nationalize.io?name=';


const imprime = ((myJson) => {
    let countries=[];
    let name="";
    let percent=0;
    for (const key in myJson.country) {
        name= myJson.name;
        
        const element = myJson.country[key];
        percent=(element.probability)*100;
        const p$$ = document.createElement("p");
        p$$.innerHTML=`El nombre ${name} tiene un ${percent} por ciento de ser de
         ${element.country_id}`;
        document.body.appendChild(p$$);
    }
    

});


const consulta = ((baseUrl) =>{

    baseUrl=baseUrl+input$$.value;
    //console.log(baseUrl);
    fetch(baseUrl)
        .then(response =>(response.json()))
        .then((myJson) => {
           console.log(myJson);
           imprime(myJson);

    });

});






button$$.addEventListener("click",function(){consulta(baseUrl)});




// baseUrl=baseUrl+input$$.value;
// console.log(baseUrl);


