const input$$ = document.createElement("input");
input$$.value="hola a todos";
input$$.className="b-input";

input$$.addEventListener("click",showMessage);
function showMessage(evento){
    console.log(evento.target.value);
    const inputRemove$$ = document.querySelector('[type="text"]');
    remove(inputRemove$$);
}
function remove(param){
    param.remove();
}

document.body.append(input$$);
