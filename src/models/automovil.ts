
// Procederemos a crear y exportar la clase auto.

export class auto{
    private _marca: string
    private _modelo: string
    private _deposito: number
    private _vel:number
    private _time:number
    private _consumo:number

    private "_estado": boolean    
    private "_km": number
    private "_gasto":number
  
// Utilizaremos un constructor para la clase.

    constructor(marca:string,modelo:string,deposito:number,vel:number,time:number,consumo:number){
        this._marca= marca
        this._modelo= modelo      
        this._deposito= deposito
        this._vel= vel
        this._time= time
        this._consumo= consumo
}


// Por último finalizar la creación de la clase deberemos crear los metodos.

// Para obtener información sobre los objetos de esta clase, utilizaremos los métodos tipo get. 
    
    get Marca (){
        return this._marca
    }

    get Modelo (){
        return this._modelo
    }

    get Deposito (){
        return this._deposito
    }

    get Vel(){
        return this._vel
    }

    get Time(){
        return this._time
    }

    get Consumo (){
         return this._consumo
    }   

    get Estado (){
        return this._estado
   }   


// Definiremos los métodos tipo set, para poder definar algunos valores 


    set Estado (estado: boolean){
        this._estado= estado

    }
    

    set Cdepo (deposito:number){

    // Levantaremos una excepción en caso de que, se quiera agregar un deposito sin combustible.

        if(deposito <= 0 || isNaN(deposito)== true){
            throw "Introduzca un deposito con combustible [Numero >= 1]"
        }

        this._deposito= deposito
    }



    set Cvel (vel: number){
    
    // Levantaremos una excepción en caso de que, se quiera modificar la velocidad con el motor apagado.

    if(this._estado== false){
        throw "No se puede modificar la velocidad si el motor esta apagado, por favor introduzca un coche con el motor encendido"
    } 
        this._vel= vel

    }


    set Ctime (time: number){
        this._time= time
    }


    // Levantaremos una excepción en caso de que, se quiera repostar con el motor encendido

    set Repos (deposito: number){
        
    if(this._estado == true){
        throw "No se puede repostar si el motor esta encendido, por favor introduzca un coche con el motor encendido"
    } 

        this._deposito= deposito
    }



// Métodos para realizar calculos

    Km (){
        return this._vel * this._time
    }

    Gasto(){
        return  (this._vel * this._time /100 * this._consumo).toFixed(2)
    }

 }