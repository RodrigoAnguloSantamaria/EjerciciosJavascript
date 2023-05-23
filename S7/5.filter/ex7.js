const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


const filtroStreamers = (event =>{
    const filteredStreamers=streamers.filter(streamer => streamer.name.toLowerCase().includes(streamerInput$$.value.toLowerCase()))
    console.log(filteredStreamers)
})




const streamerInput$$=document.querySelector("input");
streamerInput$$.addEventListener("input", filtroStreamers);




