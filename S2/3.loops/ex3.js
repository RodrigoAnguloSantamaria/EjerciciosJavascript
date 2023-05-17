const placesToTravel = [
{id: 11, name: 'Japan'}, 
{id: 11, name: 'Venecia'},
{id: 23, name: 'Murcia'}, 
{id: 4, name: 'Santander'}, 
{id: 40, name: 'Filipinas'}, 
{id: 11, name: 'Madagascar'}
]

for (let i=0; i <placesToTravel.length;i++){
    let item=placesToTravel[i];
    if ((item.id === 11) || (item.id === 40)){
        placesToTravel.splice(i,1);
        i=i-1;
    }
}
console.log(placesToTravel);