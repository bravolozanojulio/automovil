export class auto{
    private _marca: string
    private _modelo: string
    private _distancia: number
    private _deposito: number
    private _consumo
    private _vel:number
  
    constructor(marca:string,modelo:string,distancia:number,deposito:number,consumo:number,vel:number){
        this._marca= marca
        this._modelo= modelo
        this._distancia= distancia
        this._deposito= deposito
        this._consumo= consumo
        this._vel= vel
    }
    
    get Marca (){
        return this._marca
    }

    get Modelo (){
        return this._modelo
    }

    get Consumo (){
        return this._consumo
    }

    get Distancia (){
        return this._distancia
    }

    get Deposito (){
        return this._deposito
    }

    get Velocidad(){
        return this._vel
    }
}


    
    

    
 