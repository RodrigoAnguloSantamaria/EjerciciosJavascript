const button$$=document.createElement("button");
button$$.id="btnToClick";
button$$.textContent="CLICK ON ME";
//console.log(button$$);
document.body.append(button$$);

button$$.addEventListener("click",showText);
function showText(LALA){console.log(LALA)}