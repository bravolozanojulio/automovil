export class auto{
    private _marca: string
    private _modelo: string
    private _motor: string
    private _combus: number
    private _km: number
    private _potencia: number
    private _vel:number
  
    constructor(marca:string,modelo:string,motor:string,km:number,combus:number,potencia:number,vel:number){
        this._marca = marca
        this._modelo = modelo
        this._motor= motor
        this._combus= combus
        this._km = km
        this._potencia= potencia
        this._vel = vel
    }
    
    get Marca (){
        return this._marca
    }

    get Modelo (){
        return this._modelo
    }

    get Motor (){
        return this._motor
    }

    get Combus (){
        return this._combus
    }

    get Km(){
        return this._km
    }

    get Potencia (){
        return this._potencia
    }
    get Velocidad(){
        return this._vel
    }
}


    
    

    
 