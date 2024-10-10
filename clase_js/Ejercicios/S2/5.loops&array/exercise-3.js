let placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

console.log(placesToTravel);

for (let i = 0; i < placesToTravel.length; i++) {
    
   if(placesToTravel[i].id == 11 || placesToTravel[i].id == 40){
    let place = placesToTravel[i];
        console.log(placesToTravel[i].name);
        placesToTravel.splice(i,1);
        i--;
    }
    
}


console.log(placesToTravel);