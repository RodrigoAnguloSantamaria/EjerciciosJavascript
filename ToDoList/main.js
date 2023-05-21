
const divSearch$$ = document.querySelector(".search");
const addInput$$ = document.querySelector("input");
const addButton$$ = document.querySelector(".btn-add");
const ulList$$ = document.querySelector("ul");
const emptyDiv$$ = document.querySelector(".empty");
let counter=0;
const date = new Date();
let taskDate;
emptyDiv$$.style.display = "block";


function removeItem(){
    // GET DE TODAS LAS LI
    const allLiItems$$=document.querySelectorAll("li");
    if(allLiItems$$.length == 1){
        emptyDiv$$.innerHTML=`<p>No tasks.</p>`;
        emptyDiv$$.style.display = "block";
        counter=0;}
        else{
            counter--;
            emptyDiv$$.innerHTML=`<p>Pending tasks: ${counter}.</p>`;
        }
    
    //console.log(allLiItems$$);
}


function addToList(event) {
    //ulList$$.innerHTML = `<li class="li-container"><p>${addInput$$.value}</p><button class="btn-delete">x</button></li>`;
    event.preventDefault();
    
    // if (emptyDiv$$.style.display == "block"){
    //     emptyDiv$$.style.display = "none";
    // }
    

    // CREA EL NODO LI CON UNA CLASE Y AÑADE VALOR DEL INPUT
    const li$$=document.createElement("li");
    //li$$.className = "li-container";
    taskDate="Added date "+date.getDate()+"-"+ (date.getMonth()+1) +"-"+date.getFullYear()+"---"+date.getHours()+":"+date.getMinutes();
    li$$.innerHTML=`<p>${addInput$$.value}<br><span>${taskDate}</span></p>`;
    //li$$.textContent = addInput$$.value;

    // CREA EL NODO BOTON DE ELIMINAR CON UNA CLASE
    const btnDel$$ = document.createElement("button");
    btnDel$$.className = "btn-delete";
    btnDel$$.textContent = "x" ;

    // AÑADE EL BOTON AL LI
    li$$.append(btnDel$$);

    //AÑADE EL LI A LA UL
    ulList$$.appendChild(li$$);

    // AUMENTA CONTADOR PARA NUMERO DE TAREAS Y AÑADE TEXTO A DIV CON CLASE EMPTY
    counter++;
    emptyDiv$$.innerHTML=`<p>Pending tasks: ${counter}.</p>`;
    addInput$$.value="";
    addInput$$.placeholder="Add task...";
    
    console.log(taskDate);


    // EVENTO DEL BOTON DE ELIMINAR QUE LLAMA PRIMERO A FUNCION REMOVEITEM    
    btnDel$$.addEventListener("click",function(){removeItem()
        li$$.remove();
        
    });

    //  ulList$$.append(li$$.className("li-container"));
    //  ulList$$.append(addInput$$.value);
 
     
     //console.log(event);
     //ulList$$.innerHTML = `<li class="li-container"><p>${addInput$$.value}</p><button class="btn-delete">x</button></li>`;
 }

addButton$$.addEventListener("click",addToList);
 









// function addToList(evento){
//     addInput$$.value //valor del input
//     console.log(evento)
 
    
    // document.body.ap.append(ulList$$)
    //insertar una nueva linea en la ul
    //un li y un boton
    
    // console.log(ulList$$)
    // const li$$ = document.querySelector(li)
    // const deleteButton$$ = document.querySelector(".btn-delete");
    // deleteButton$$.addEventListener("click",removeItem);



