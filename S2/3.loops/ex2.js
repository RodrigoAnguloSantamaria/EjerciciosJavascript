const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
let element
for (const key in alien) {
    if (alien.hasOwnProperty.call(alien, key)) {
        element = alien[key];
        
    }
    console.log("clave: " + key + " valor: " + element);
    
}
