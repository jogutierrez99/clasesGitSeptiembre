let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
];

let $firstCard = null;
let attempts = 0;
let score = 0;

function init() {
   loadBoard();
   assignEvents();

}

function assignEvents(){

   let $cards = document.querySelectorAll(".card");

   for (const $card of $cards) {
      $card.addEventListener("click", selectCard);
   }
}

function selectCard(){
    //TODO si la segunda tarjeta es igual que la primera no cuenta, en cuanto a la misma posicion
    if(
        $firstCard !== null  &&
        this.dataset.id === $firstCard.dataset.id
      ){
        alert("No debes hacer click en la misma tarjeta");
        return;
      }

    //TODO si la segunda tarjeta clickcada ya esta solucionada no cuenta, es decir el par activo no cuenta
    if(this.classList.contains("resolved")){
      alert("Esta tarjeta ya esta correcta");
      return;
    };

    this.classList.add("active");
  
    if($firstCard === null){
      //Primer click
      $firstCard = this;
    }else{
      //Segundo click
      //le damos tiempo para que se olculte hideBoard();
      setTimeout(hideBoard, 1500);
      //suma intentos
      addAtempt();
      //TODO comprobar si son iguales para ganar puntos
      if(this.dataset.name === $firstCard.dataset.name){
        resolveTry($firstCard, this);
      }

      $firstCard = null;

    }
}

function resolveTry($card1 , $card2){
  score++;
  let $scoreSpan = document.querySelector("#score");
  $scoreSpan.textContent = score;

  $card1.classList.add("resolved");
  $card2.classList.add("resolved");

  checkWin();
}

function checkWin(){
  let $resolvedCards = document.querySelectorAll(".card.resolved");
  if($resolvedCards.length === cardArray.length){
    setTimeout(function(){
      alert("Enhorabuena, has ganado!");
    },1000);
  }

}

function addAtempt(){
  attempts++;
  let $attempsSpan = document.querySelector("#attempts");
  $attempsSpan.textContent = attempts;
}

function loadBoard() {
    let $container = document.querySelector("#cardsContainer");

    for(let card of cardArray){
        let $card = document.createElement("div");
        $card.classList.add("card");
        $card.dataset.id = card.id;
        $card.dataset.name = card.name;

        let $img = document.createElement("img");
        $img.src = card.img;
        $img.alt = card.name;

        $card.appendChild($img);

        //TO DO necesitare alamcenar el id y el nombre de la tarjeta
        $container.appendChild($card);
    }
}

function hideBoard(){
  //Todo borrar clase active de las cards
  let $selectedCards = document.querySelectorAll(".card.active");
  for (const $selectedCard of $selectedCards) {
    $selectedCard.classList.remove("active");
  }
}

init();
