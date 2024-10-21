const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

console.log(animalFunction());

let {name,race} = animalFunction();

console.log(name);
console.log(race);