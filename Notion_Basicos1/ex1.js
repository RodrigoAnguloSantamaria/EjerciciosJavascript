// DIFERENT ARRAYS FOR TEST
var avengers = ['Spiderman', 'AntMan', 'Hulk'];
var mutants = ['Wolverine', 'Ciclops', 'Storm'];
var defenders = ['Daredevil', 'IronFist', 'Luke Cage'];

let longestElement="";

//CHOOSE ONE OF THE TOP ARRAYS
defenders.forEach((element)=>{
    //console.log(element.length);
    if (element.length > longestElement){
        longestElement=element;
    }
    

})
console.log(longestElement)
