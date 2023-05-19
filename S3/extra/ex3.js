const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div$$ = document.querySelector('[data-function="printHere"]');
//console.log(div$$);
const ul$$ = document.createElement("ul");
for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    const li$$ = document.createElement("li");
    li$$.append(cars[index]);
    ul$$.appendChild(li$$);
    
}
div$$.appendChild(ul$$);