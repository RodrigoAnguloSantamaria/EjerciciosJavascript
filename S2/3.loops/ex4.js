const toys = [{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'},
 {id: 40, name: 'El gato con Guantes'},
 {id: 40, name: 'El gato felix'}]

 const newArray=[];
 for (const toy of toys) {
    const item=toy.name;
    if (!item.includes("gato")){
        newArray.push(toy);
    }

    
 }
 console.log(newArray);