import NumerosServices from "../services/numeros.services.js";

class NumerosController{

    constructor(){
        this.service=new NumerosServices()
    }

    getNumeros=async(req,res)=>{
        const data=await this.service.getNumeros()

        res.send(data)
    }

    getPromedio=async(req,res)=>{

        const data=await this.service.getPromedio()
        res.send(data)
    }

    getMinMax=async(req,res)=>{

        const data=await this.service.getMinMax()
        res.send(data)
    }

    getCantidad=async(req,res)=>{

        const data=await this.service.getCantidad()
        res.send(data)
    }

    postNumeros=async(req,res)=>{

        const data=req.body;
        try{
            if(JSON.stringify(req.body)=="{}"){
                
                throw new Error("El objeto no tiene los parámetros válidos")
            }
            const newdata=await this.service.postNumeros(data)
            res.send(newdata)

        }catch(error){
            console.log(error)
            res.send(error.message)
        }
    }


}

export default NumerosController