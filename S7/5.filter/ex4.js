const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let result= streamers.filter(streamers => {
    return ((streamers.gameMorePlayed === 'League of Legends') &&  (streamers.age < 30))
});

console.log(result);