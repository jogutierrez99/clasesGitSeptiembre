const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
  let bigAvenger = "";
    for (const avenger of avengers) {

        if(avenger.length>bigAvenger.length){
            bigAvenger = avenger;
        }
    }

 return bigAvenger;

}

console.log(findLongestWord(avengers));