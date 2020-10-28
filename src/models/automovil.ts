
// Procederemos a crear y exportar la clase auto.

export class auto{
    private _marca: string
    private _modelo: string
    private _deposito: number
    private _vel:number
    private _time:number
    private _consumo:number
    
// A continuación, definiremos los valores no obligatorios. 

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


// Para finalizar la creación de la clase deberemos crear los metodos.
// para obtener información sobre los objetos de esta clase.

// Métodos tipo get 
    
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

// Métodos tipo set 


    set Estado (estado: boolean){
        this._estado= estado
    }
    
    set Cvel (vel: number){
        this._vel= vel
    }

    
    set Ctime (time: number){
        this._time= time
    }


// Métodos para realizar calculos

    Km (){
        return this._vel * this._time
    }

    Gasto(){
        return  (this._vel * this._time /100 * this._consumo).toFixed(2)
    }

 }