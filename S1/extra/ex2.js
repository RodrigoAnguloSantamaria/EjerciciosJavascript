const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

for (let i=0; i < (foodSchedule.length); i++){
    
    if (foodSchedule[i].isVegan == false){
        foodSchedule[i].name = fruits.shift();
        foodSchedule[i].isVegan = true;
    } 
}
console.log(fruits);
console.log(foodSchedule);