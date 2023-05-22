// EXERCISE 1 SPLIT NAME

function splitName(){
    const fullname$$=document.querySelector(".fullName");
    
    let Name=fullname$$.value;
    
    let spacePosition=0;
    let firstName;
    let lastName;
   

        
        for (let index = 0; index < Name.length; index++) {
            const element = Name[index];
            // console.log(fullName[index]);
            if(Name[index] == " "){
                spacePosition=index;
            }
        }
        console.log(spacePosition)
        firstName=Name.substring(0,spacePosition);
        lastName=Name.substring((spacePosition+1),Name.length);
        //const li$$ =document.createElement("li");
        const li$$ = document.querySelector(".resultSplit");
        
        li$$.innerHTML=`<p>Nombre: ${firstName}<br>Apellido: ${lastName}</p>`;
        
        //ul$$.append(li$$);
        //alert(firstName + " --- " + lasName);
    
}

const button$$=document.querySelector(".split");
button$$.addEventListener("click",splitName);
let ivaPrice=0;
let totalPrice=0;

// EXERCISE 2
function finalPrices(valor){
    console.log(valor);
     ivaPrice=parseFloat((valor)*1.21).toFixed(2);
     totalPrice=parseFloat(ivaPrice+4.95).toFixed(2);
 

}

function calculatePrice(){
    const price$$=document.querySelector(".price");

    finalPrices(price$$.value);
   //console.log(ivaPrice + " --- " + totalPrice);
   const li$$ = document.querySelector(".resultPrice");
        
        li$$.innerHTML=`<p>Precio base: ${price$$.value} €<br>Precio con IVA: 
        ${ivaPrice} €<br>Precio total: ${totalPrice} €</p>`;

}


const buttonPrice$$=document.querySelector(".finalPrice");
buttonPrice$$.addEventListener("click",calculatePrice);






