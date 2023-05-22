const input$$=document.querySelector("input");
const button$$=document.querySelector("button");
const baseUrl = 'https://api.nationalize.io?name=';

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

const imprime = ((myJson) => {
    let countries=[];
    let name="";
    for (const key in myJson.country) {
        const element = myJson.country[key];
        countries.push(element.country_id)
    }
    name= myJson.name;

    const p$$ = document.createElement("p");
    p$$.innerHTML=`Countries: ${countries} for name ${name}`;
    document.body.appendChild(p$$);

});




button$$.addEventListener("click",function(){consulta(baseUrl)});




// baseUrl=baseUrl+input$$.value;
// console.log(baseUrl);


