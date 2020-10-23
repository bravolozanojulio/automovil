// Importaciones 

    // Importación clase 

    import {auto} from './models/automovil'

    // Importacion de los distintos menus 

    import {menprin} from './view/menus/menuPrincipal'
    import {menu2} from './view/menus/menu2'
    import {menu3} from './view/menus/menu3'


    // Importación para la funcion de entrada de teclado 

    import {leerTeclado} from './view/entradaTeclado'


// Desarrollo de la aplicacion

    // A continuación, crearemos la constante principal de nuestro software.

    // Lo primero que realizaremos es crear la variables para la distintas opciones del menu

const main = async () => {
    let opcion: number
    do {
        opcion= await menprin()
        switch(opcion){
            case 1:
                console.log("Seleccione el estado de su vehiculo")
                let opcion2: number
                opcion2= await menu2()
                switch(opcion2){
                    case 1:
                            console.log("El motor esta encendido \n")
                            let marca:string,modelo:string,distancia:number,deposito:number,consumo:number,vel:number
                            let coche: auto

                            break
                    case 2:
                            console.log("El motor esta apagado")
                            break
                    case 0:
                            console.log("Usted ha finalizado la ejecucion del sofware")
                            break
                    default:
                            console.log("No has seleccionado ninguna opción")
                            break
                }   
                break
            case 2:
                console.log("Informacion ultimo coche")
                break
            case 0:
                console.log("Usted ha finalizado la ejecucion del sofware")
                break
            default:
                console.log("No has seleccionado ninguna opción")
                break
            }
        } while (opcion != 0)  
}


// Ejecutamos la funcion principal

main()

            
            
