class NumerosMemModel{

    constructor(){
        this.numeros=[]
    }


    getNumeros=async()=>{

        return this.numeros
    }


    postNumeros=async(data)=>{

        this.numeros.push(data)
        return data

    }



    getPromedio=async()=>{

        if(this.numeros.length>0){
            const sumaNumeros=this.numeros.reduce((acum,elem)=>parseInt(acum)+parseInt(elem.numero),0)
            const promedio=sumaNumeros/this.numeros.length

            return promedio.toString()
        }
       

        return "todavia no cargaron los numeros, lista numeros vacia"
    }

    getMinMax=async()=>{

        if(this.numeros.length>0){
            const min=this.numeros.reduce((acum,elem)=>{
                return parseInt(elem.numero)<acum?parseInt(elem.numero):parseInt(acum)
            },99999999)
            const max=this.numeros.reduce((acum,elem)=>{
                return parseInt(elem.numero)>acum?parseInt(elem.numero):parseInt(acum)
            },0)
    
            const datos={maximo:max,minimo:min}
    
            return datos

        }
       
        return "todavia no cargaron los numeros, lista numeros vacia"
 
    }

    getCantidad=async()=>{

        return "La cantidad de numeros es: "+this.numeros.length
    }

}
export default NumerosMemModel