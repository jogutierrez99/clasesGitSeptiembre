//Programacion orientada a objetos

class Person{
    name
    age

    constructor(name, age){
        this.name = name;
        this.age = age;
    };

    sayHi(){
        console.log("hola soy " + this.name + " tengo " + this.age);
    };

    walk(){
        console.log("Estoy caminando");
    }

};

class Singer extends Person {
    musicType
    constructor(name, age, musicType){
        super(name, age);
        this.musicType = musicType;
    }

    sing(){
        console.log("Estoy cantanto " + this.musicType);
    }

    sayHi(){
        console.log("Quee paasaaa, soy " + this.name + " tengo " + this.age);
    };

}

let hector = new Person("Joshua", 25);
let paula = new Person("Paula", 11);


hector.sayHi();
hector.walk();
paula.sayHi();

let marcos = new Singer("Marcos", 40, "Rock");

marcos.sayHi();
marcos.sing();


let pedro = new Singer("Pedro", 20, "K-Ppop");

pedro.sayHi();
pedro.sing();
pedro.walk();