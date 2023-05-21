// EXERCISE 1 SPLIT NAME

function splitName(){
    const fullname$$=document.querySelector(".fullName");
    
    let Name=fullname$$.value;
    
    let spacePosition=0;
    let firstName;
    let lastName;
    if (li$$){
        li$$.remove();
    }
    else{

        
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
        const li$$ =document.createElement("li");
        li$$.className="result";
        li$$.innerHTML=`<p>Nombre: ${firstName}<br>Apellido: ${lastName}</p>`;
        const ul$$=document.querySelector(".ex1");
        ul$$.append(li$$);
        //alert(firstName + " --- " + lasName);
    }
}

const button$$=document.querySelector(".split");
button$$.addEventListener("click",splitName);


// EXERCISE 2





