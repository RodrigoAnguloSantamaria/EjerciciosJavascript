const createDiv$$=document.createElement("div");
for (let i=0;i<=6;i++){
    const createP$$=document.createElement("p");
    createDiv$$[i]=createDiv$$.appendChild(createP$$);

}
document.body.appendChild(createDiv$$);