const supertest = require("supertest");
const server = require("../index");

//configuracion
const api = supertest(server);

describe("GET /client/getByName", ()=>{

    /*
    1) Verificar el codg de respuesta: Es 200
    2) Verificar el formato si es de tipo json
    3) Verificar que la respuesta tenga un array
    4) Verificar si cada objeto del array es un cliente
    */

    test("retornar array de clientes", async () => {
        
        //simular peticion al servidor
        const  response = await api.get("/client/getByName?name=joshua");

        //Verificar el codg de respuesta: Es 200
        expect(response.status).toBe(200);

        expect(response.headers["content-type"]).toMatch(/json/);

        expect(Array.isArray(response.body)).toBe(true);

    });
    


})