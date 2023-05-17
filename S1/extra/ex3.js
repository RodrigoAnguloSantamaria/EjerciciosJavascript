const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
let peliculaPequeña=[];
let peliculaMediana=[];
let peliculaGrande=[];

for (let i =0; i<movies.length;i++){
    if (movies[i].durationInMinutes < 100){
        peliculaPequeña.push(movies[i].name);
    }
    else if (movies[i].durationInMinutes > 200){
        peliculaGrande.push(movies[i].name);
    }
    else{
        peliculaMediana.push(movies[i].name);
    }
}
console.log("peliculas pequeñas: " + peliculaPequeña)
console.log("peliculas medianas: " + peliculaMediana)
console.log("peliculas grandes: " + peliculaGrande)
