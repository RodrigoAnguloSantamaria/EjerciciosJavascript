const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let listSound=[];
let tempArray=[];
let counter=0;
for (const iterator of users) {
    //console.log(iterator.favoritesSounds)

    for (const key in iterator.favoritesSounds) {
        console.log("key: "+key)
            if(!listSound.length){
                listSound.push({sonido:key,contador:1});
            }
            else{
                let isInList=false;
                for (let index = 0; index < listSound.length; index++) {
                    const element = listSound[index];
                    console.log("sonido en lista "+element.sonido)
                    if(element.sonido == key){
                        element.contador++;
                        isInList=true;
                        break;
                    }
                }
                if(isInList==false){
                    listSound.push({sonido:key,contador:1});
                }
            }
    }
}
        
    
console.log(listSound)

