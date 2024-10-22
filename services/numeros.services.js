import Factory from "../models/Factory.js";

class NumerosServices{

    constructor(){

        this.model= Factory.get("MEM")
    }

    getNumeros=async()=>{

        return await this.model.getNumeros()
    }

    getPromedio=async()=>{

        return await this.model.getPromedio()
    }

    getMinMax=async()=>{

        return await this.model.getMinMax()
    }

    getCantidad=async()=>{

        return await this.model.getCantidad()
    }

    postNumeros=async(data)=>{

        return await this.model.postNumeros(data)
    }
}

export default NumerosServices