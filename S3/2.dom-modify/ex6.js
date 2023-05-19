const apps = ['Facebook', 'Netflix', 'Instagram'
, 'Snapchat', 'Twitter'];

const ul$$ = document.createElement("ul");

for (let i=0; i<apps.length;i++){
    let li$$ = document.createElement("li");
   // let value=li$$.append(apps[i]);
   li$$.append(apps[i]);
    
   
    //console.log(li$$);
    ul$$[i]=ul$$.appendChild(li$$);
}
//console.log(ul$$)
document.body.appendChild(ul$$);