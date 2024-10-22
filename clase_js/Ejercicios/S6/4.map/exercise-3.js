const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

let citiesName = cities.map(function(citie){

    if(citie.isVisited === true){
        return citie.name + " visitado";
    }else{
        return citie.name;
    }
});

console.log(citiesName);