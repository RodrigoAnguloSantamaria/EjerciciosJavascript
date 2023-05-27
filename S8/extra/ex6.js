init();

// variable globales
let numCharsSelected=0;
const container$$=document.querySelector(".c-characters");
let player1;
let player2;



// funcion inicio que hace el fetch
async function init (){
    const call=await fetch("http://localhost:3000/characters");
    const results=await call.json();
    
    printCharacters(results);
}

// pinta en pantalla los jugadore
const printCharacters= (results)=>{
    //console.log(results)
    results.forEach(result => {
        const divItem$$=document.createElement("div");
        divItem$$.className="c-characters__item";
        divItem$$.innerHTML=`<img src="${result.avatar}">
        <p>${result.name}</p>`;
        container$$.appendChild(divItem$$);
        divItem$$.addEventListener("click",function(){charSelected(results,result.name)})
    });

}

// funcion que comprueba los jugadores seleccionados con click y obtiene del json su objeto
const charSelected = (results,characterClicked)=>{
    
    
    //// con este if selecciona jugador 1
    if (numCharsSelected==0){
        for (const character of results) {
            
            if (character.name === characterClicked){
                player1=character;
                numCharsSelected++;
            }
        }
    }
    // con este elseif selecciona jugador 2
    else if (numCharsSelected ==1 ){
        for (const character of results) {
            if (character.name === characterClicked){
                player2=character;
                numCharsSelected++;
            }
        }
        const button$$=document.createElement("button")
        button$$.textContent="FIGHT";
        container$$.appendChild(button$$);
    
        // elegir quien empieza con numero aleatorio de 1 a 10
        let moneda=Math.floor(Math.random() * 10) + 1;
        let starts=1;
        if (moneda<=5){starts=2}

        button$$.addEventListener("click",function(){fight(player1,player2,starts)}) 
    }
    else{alert("ya hay 2 personajes seleccionados")}
    
}
    


const fight=(player1,player2,starts)=>{
   const board$$=document.createElement("h2");
   container$$.appendChild(board$$)


    if (starts == 1){
        //empieza a luchar player1
        let vidaplayer1=player1.vitality;
        let vidaplayer2=player2.vitality;
        
      
        for (let i =0; i <= 100; i++){
            board$$.innerHTML=``;
            let ataque1=setTimeout(() => {
                hitPlayer1(player1)},5000);
            
            board$$.innerHTML=`ataque de ${player1.name} : ${ataque1} puntos`;
            vidaplayer2-=ataque1;
            if (vidaplayer2 <= 0){
                console.log("jugador 2 pierde")
                break
            }
                      
            board$$.innerHTML=``;  
            let ataque2=setTimeout(() => {
                hitPlayer2(player2)},5000);
            
            board$$.innerHTML=`ataque de ${player2.name} : ${ataque2} puntos`;
            vidaplayer1-=ataque2;
            if (vidaplayer1 <=0){
                console.log("jugador 1 pierde")
                break}

            console.log("vida player1: "+vidaplayer1)
            console.log("vida player2: "+vidaplayer2)
        }
        
    }
    else{
        let vidaplayer1=player1.vitality;
        let vidaplayer2=player2.vitality;
        
        
        for (let j =0; j <= 100; j++){
            board$$.innerHTML=``;
            let ataque2=setTimeout(() => {
                hitPlayer2(player2)},5000);
            
            board$$.innerHTML=`ataque de ${player2.name} : ${ataque2} puntos`;
            vidaplayer1-=ataque2;
            if (vidaplayer1 <=0){
                console.log("jugador 1 pierde")
                break}
            
                board$$.innerHTML=``;
                let ataque1=setTimeout(() => {
                    hitPlayer1(player1)},5000);
                
            
            board$$.innerHTML=`ataque de ${player1.name} : ${ataque1} puntos`;
            vidaplayer2-=ataque1;
            if (vidaplayer2 <= 0){
                console.log("jugador 2 pierde")
                break
            }
                
            console.log("vida player1: "+vidaplayer1)
            console.log("vida player2: "+vidaplayer2)
        }
        
    }
  
}

const hitPlayer1=(player1)=>{
    let completeHit=0;
    player1.damage.forEach(damage => {
        let indice = damage.indexOf("d");
        let numdados=damage.slice(0,indice);
        let numcaras=damage.slice(indice+1);
        
        for (let k=0; k <= numdados; k++){
            let hit=(Math.floor(Math.random() * numcaras) + 1);
            if (hit === player1.critic){hit=hit*2}
            completeHit+=hit;
        }
        

    } )  
    return completeHit
    
    
}
const hitPlayer2=(player2)=>{
    let completeHit=0;
    player2.damage.forEach(damage => {
        let indice = damage.indexOf("d");
        let numdados=damage.slice(0,indice);
        let numcaras=damage.slice(indice+1);
        for (let k=0; k <= numdados; k++){
            let hit=(Math.floor(Math.random() * numcaras) + 1);
            if (hit === player1.critic){hit=hit*2}
            completeHit+=hit;
        }
       
    });
    return completeHit
}