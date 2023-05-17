const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const newList=[];
for (const film of movies){
    for (const categories of film.categories) {
        if (!newList.includes(categories)) {
            newList.push(categories);
        }
    }
    
}
console.log(newList);