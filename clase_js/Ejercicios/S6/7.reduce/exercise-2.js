const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

//Preguntar a Hector
let sumaTotal = exams.reduce((acc, exam) => (exam.score >= 5) ? acc += exam.score : null, 0);


let sumaTotal2 = exams.reduce(function(acc, exam){
        if(exam.score >= 5){
            acc += exam.score;
        }
      return acc
}, 0);

console.log(sumaTotal2);