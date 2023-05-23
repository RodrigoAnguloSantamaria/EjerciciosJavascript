const divCharacters$$=document.querySelector(".characters");
const divSearch$$ = document.querySelector('[data-function="search"]');
const divDescription$$=document.querySelector(".description");

const getPlanets = async()=>{
    const call = await fetch("http://localhost:3000/planets");
    const myJson = await call.json();
    return myJson;
}
const getCharacters = async(planetId)=>{
    const url="http://localhost:3000/characters?idPlanet="+planetId;
    const call = await fetch(url);
    const myJson = await call.json();
    return myJson;
}

const findCharacter = (filteredCharacters,inputValue)=>{
    // console.log(filteredCharacters)
    // console.log(inputValue)
    const inputCharacters = filteredCharacters.filter(filteredCharacter=>{
        
        if (filteredCharacter.name.toLowerCase().includes(inputValue.toLowerCase())){
            return filteredCharacter
        }
    })
   // console.log(inputCharacters)
   if (!inputValue){
    printCharacters(filteredCharacters)
   }
   else{
    printCharacters(inputCharacters);
   }
}


const searchCharacters = (filteredCharacters) =>{
    //console.log(filteredCharacters);
   // divSearch$$.innerHTML=``;
    const isButton$$=document.querySelectorAll("button")
    if(isButton$$.length ===0){
        const searchInput$$=document.createElement("input");
        searchInput$$.placeholder="Add text to filter caracters";
        const searchButton$$=document.createElement("button");
        searchButton$$.textContent="BUSCAR"
        searchButton$$.addEventListener("click",function(){findCharacter(filteredCharacters,searchInput$$.value)});
        divSearch$$.appendChild(searchInput$$);
        divSearch$$.appendChild(searchButton$$);
    }
    

}


const showDescription = (characters,characterName)=>{
     console.log(characters)
    // console.log(characterName)
    const characterDescription = characters.filter(character=>{
        if (character.name === characterName){
            //console.log(character.description);
            if (divDescription$$.childElementCount === 0){
                const description = character.description;
                divDescription$$.innerHTML=`<p>${description}</p>`
            }
            else{
                divDescription$$.innerHTML=``;
            }
            
            //console.log(divDescription$$.childElementCount)
            return character.description
        }
        
    })
    //console.log(characterDescription)

}


const printCharacters = (characters)=>{
    divCharacters$$.innerHTML=``;

    characters.forEach(character => {
        const section$$=document.createElement("section");
        section$$.className="itemcontainer";
        section$$.innerHTML=`<span><b>Character:</b><br> ${character.name}</span>
        <img src="${character.avatar}" class="characterimg"></section>`;
        section$$.addEventListener("click",function(){showDescription(characters,character.name)})
        divCharacters$$.appendChild(section$$);
        
    });
    
    
   searchCharacters(characters);
    
}

const characters = async(planetId)=>{
    const filteredCharacters = await getCharacters(planetId);
    //console.log(filteredCharacters);

    printCharacters(filteredCharacters);
    // divCharacters$$.innerHTML=``;

    // filteredCharacters.forEach(character => {
    //     const section$$=document.createElement("section");
    //     section$$.className="itemcontainer";
    //     section$$.innerHTML=`<span>Character:<br> ${character.name}</span>
    //     <img src="${character.avatar}" class="characterimg"></section>`;
    //     divCharacters$$.appendChild(section$$);
        
    // });
    
    // searchCharacters(filteredCharacters);

    
    // console.log(planetId);


}


const planets = async()=>{
    const allPlanets = await getPlanets();
    //console.log(allPlanets);

    allPlanets.forEach(element => {
        const divPlanets$$=document.querySelector('[data-function="planets"]')
        const item$$ = document.createElement("div");
        item$$.className="item";
        const planetName$$=document.createElement("span");
        planetName$$.textContent=element.name;
        item$$.appendChild(planetName$$);
        const planetImg$$=document.createElement("img");
        planetImg$$.src=element.image;
        planetImg$$.className="planetFigure";
        planetImg$$.addEventListener("click",function(){characters(element.id)})
        item$$.appendChild(planetImg$$)

        divPlanets$$.appendChild(item$$)
       
        

    });
}

// CALL FOR DOING QUERY TO API AND GET ALL RESULTS IN 
// ALLPLANETS THAT IS AN ARRAY
planets();
