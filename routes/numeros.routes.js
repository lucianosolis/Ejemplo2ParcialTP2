import NumerosController from "../controllers/numeros.controllers.js";
import express from "express"

class Router{

    constructor(){

        this.controller=new NumerosController()
        this.router=express.Router()
    }

    start(){

        this.router.get("/entrada",this.controller.getNumeros)
        this.router.get("/minmax",this.controller.getMinMax)
        this.router.get("/promedio",this.controller.getPromedio)
        this.router.get("/cantidad",this.controller.getCantidad)
        this.router.post("/entrada",this.controller.postNumeros)

        return this.router
    }
}

export default Router