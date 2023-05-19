const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul$$ = document.createElement("ul");
for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    let li$$ = document.createElement("li");
    li$$.append(element);
    ul$$.appendChild(li$$)

    
}
document.body.appendChild(ul$$);