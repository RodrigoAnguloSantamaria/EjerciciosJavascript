const apiUrl="https://amiiboapi.com/api/amiibo/";
const divContainer$$=document.createElement("div");
const select$$=document.querySelector("select");
const itemsSelect=[];
const iteToPrint=[];
const myJson={};


// PRINT GALLERY IN DIV
function printGallery(event,myJson){
    // RESET DIVCONTAINER CONTENT
    divContainer$$.innerHTML=``;
    
    // ASIGN VARIABLE GAMESERIES THE VALUE OF THE SELECTED ITEM OF THE SELECT
    let gameSeries=event.target.value;
    console.log(myJson.amiibo);
    
    // INSERT INTO BODY THE DIV CONTAINER
    divContainer$$.className="divContainer";
    document.body.append(divContainer$$);

    // LOOP THE ARRAY RETURNED BY API AND CHECK FOR PROPERTY GAMESERIES EQUAL TO THE CONTENT OF LOCAL
    // VARIABLE THAT HAS THE VALUE SELECTED BY THE USER
    for (const key in myJson.amiibo) {
        const element = myJson.amiibo[key];
        
        if (element.gameSeries == gameSeries){
            // ADD FIGURE AND CHARACTER TO SECCTION NODE
            const figure= element.image;
            const character=element.character;
            const item$$=document.createElement("section");
            item$$.className="section";
            
            item$$.innerHTML=`<img src="${figure}" class="figure"><h3>${character}</h3>`;
            divContainer$$.appendChild(item$$);
        }
            
        
    }
}


// QUERY TO API
fetch(apiUrl)
    .then(response =>(response.json()))
    .then((myJson) => {
        optionSelect(myJson)
    });

// FUNCTION INSERT INTO SELECT NODE THE OPTIONS OF THE API FETCH FILTERED BY PROPERTY GAMESERIES
function optionSelect(myJson){
    //console.log(myJson.amiibo);

    // THIS FOR IN ADD ITEMS OF PROPERTY GAMESERIES TO AN EMPTY ARRAY AND CHECK IF THER ARE NOT YET IN IT
    for (const key in myJson.amiibo) {
            const element = myJson.amiibo[key];
            if (itemsSelect.includes(element.gameSeries)){
                console.log("repetido")
            }
            else{
                itemsSelect.push(element.gameSeries);
            }
          
    }

    // THIS FOR ADD THE ITEMSSELECT ARRAY TO EACH OPTION FIELD OF THE SELECT
    for (let index=0; index < itemsSelect.length; index++) {
        const option$$=document.createElement("option");
        option$$.value=itemsSelect[index];
        option$$.textContent=itemsSelect[index];
        select$$.append(option$$);
        //option$$.addEventListener("click",function(){printGallery(option$$.value)});
    }
    //console.log(myJson.amiibo);


    // ADDS EVENT ON CHANGE TO SELECT NODE AND CALLS PRINTGALLERY FUNCTION WITH 2 PARAMETRES
    // EVENT AND MYJSON
    select$$.addEventListener("change",function(){printGallery(event,myJson)})
    
        
    
    //console.log(itemsSelect)
}




            /*
        // CREATE DIV CONTAINER
        divContainer$$.className="divContainer";
        divContainer$$.className="divContainer";
        document.body.append(divContainer$$);



        for (let index = 0; index < 15; index++) {
           // PATH TO ACCESS OBJECT AMIIBO AND THEN THE DATA ARRAY WITH ITS
           // INDEX IN EACH LOOP OF THE ITERATION
           //  console.log(myJson.amiibo[index]);
           const element = myJson.amiibo[index];
           const figure= element.image;
           const character=element.character;
           const item$$=document.createElement("section");
           item$$.className="section";
           
           item$$.innerHTML=`<img src="${figure}" class="figure"><h3>${character}</h3>`;
           divContainer$$.appendChild(item$$);
            
        }
});
            */
