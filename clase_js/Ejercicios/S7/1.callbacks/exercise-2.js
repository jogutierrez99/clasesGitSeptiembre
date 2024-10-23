const userAnwsers = [];

function confirmExample(description){
    if(window.confirm(description)){
        return "ok";
    }else{
        return "Ko"
    }
}

function promptExample(description){
  return window.prompt(description);
}

function father(description, callback){
    userAnwsers.push(callback(description));
}

father("Mensaje de confirmacion", confirmExample);

father("Escribe algo", promptExample);

console.log(userAnwsers);