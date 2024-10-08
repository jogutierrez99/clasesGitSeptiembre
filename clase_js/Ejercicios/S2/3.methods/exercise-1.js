const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i = 0; i < products.length; i++) {
    //console.log(products);
    //console.log(products[i].includes("Camiseta"));
   // console.log(products.includes("Camiseta", 1));
   // products[i].includes("Camiseta")

    /*if(products[i].includes("Camiseta")){
        console.log("En la frase: " + i + " incluye la palabra 'Camiseta'");
    }*/

    if(products[i].includes("Camiseta")){
        console.log("La frase: " + i + " incluye la palabra 'Camiseta'");
        console.log(products[i]);
    }

};