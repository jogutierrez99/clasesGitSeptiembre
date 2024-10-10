const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for(let alumn of alumns){
    //console.log(alumn.name);
   if(alumn.T1 == true){

        if(alumn.T2 == true){
            alumn.isApproved = true;
        }else if(alumn.T3 == true){
            alumn.isApproved = true;
        }else{
            alumn.isApproved = false;
        }

    }else if(alumn.T2 == true){

        if(alumn.T3 == true){
            alumn.isApproved = true;
        }else{
            alumn.isApproved = false;
        }

    }else{
        alumn.isApproved = false;
    }
    console.log(alumn.name + " " + alumn.isApproved);
};