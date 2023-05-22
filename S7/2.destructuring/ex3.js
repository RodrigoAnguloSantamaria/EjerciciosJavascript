const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name} = animalFunction();
console.log(name);

const {race} = animalFunction();
console.log(race);