
//console.log(p$$)


const allDivs$$ = document.querySelectorAll(".fn-insert-here");
//console.log(allDivs$$)


for (let index = 0; index < allDivs$$.length; index++) {
    const p$$=document.createElement("p");
    p$$.textContent="Voy dentro!";
    const element = allDivs$$[index];
    console.log(element)
    element.append(p$$);

    
}
