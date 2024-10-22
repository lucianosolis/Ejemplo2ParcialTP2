import NumerosMemModel from "./DAO/numeros.models.mem.js"


class Factory{

    static get(persistence){
        switch(persistence){

            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return new NumerosMemModel();
            default:
                console.log("Persistiendo en la memoria del servidor por default")
                return new NumerosMemModel();
        }

    }



}

export default Factory