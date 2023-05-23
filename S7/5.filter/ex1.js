const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];


// // MODO FUNCTION SIN ARROW
// let result = ages.filter(function (ages) {  
// 	return ages > 18;
// });


const adults=ages.filter(ages => ages >18);
console.log(adults)