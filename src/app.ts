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
                    do {
                     opcion2= await menu2()
                     switch(opcion2){
                        case 1:
                            console.log("\n El motor esta encendido")

                            let marca:string,modelo:string,deposito:number,vel:number,time:number,consumo:number,estado:boolean
                            let v1: auto

                            marca= (await leerTeclado('\n Introduzca la marca de su coche'))
                            modelo= (await leerTeclado('\n Introduzca el modelo de su coche'))
                            deposito= parseInt(await leerTeclado('\n Introduzca la cantidad de combustible disponible'))
                            vel= parseInt(await leerTeclado('\n Introduzca la velocidad media'))
                            time= parseFloat(await leerTeclado('\n Introduzca el tiempo de conduccion'))
                            consumo= parseFloat(await leerTeclado('\n Introduzca consumo medio 100 km/l (ver ficha tecnica)'))
                            estado=true

                            v1= new auto(marca,modelo,deposito,vel,time,consumo)
                            v1.Estado =estado
                            
                            // Procederemos a insertar el menú que le indicará al usuario, las opciones

                            let opcion3: number
                            do {
                              opcion3= await menu3()
                              switch(opcion3) {
                                    case 1:
                                        console.log(`\n Los kilometros que va a realizar son ${v1.Km()} Km`)
                                        break
                                    case 2:
                                        console.log(`\n Los litros que se van a consumir son ${v1.Gasto()} L`)
                                        break
                                    case 3:
                                        console.log(`\n El estado era motor es ${v1.Estado}`)
                                        estado=false
                                        v1.Estado= estado
                                        break
                                    case 4:
                                        console.log(`\n Su velocidad es ${v1.Vel}`)
                                        vel=parseInt(await leerTeclado('\n Introduzca la nueva velocidad media'))
                                        v1.Cvel= vel
                                        break
                                    case 5:
                                        console.log(`\n Su periodo de conducción es  ${v1.Time} horas`)
                                        time =parseFloat(await leerTeclado('\n Introduzca el nuevo periodo de tiempo'))
                                        v1.Ctime= time
                                        break
                                    case 0:
                                        console.log("\n Usted ha seleccionado salir del submenu")
                                        break
                                    default:
                                        console.log("\n No has seleccionado ninguna opción")
                                        break
                                    }
                                } while (opcion3 != 0)  
                            break
                        case 2:

                            console.log("\n El motor esta apagado")

                            let marca2:string,modelo2:string,deposito2:number,vel2:number,time2:number,consumo2:number,estado2:boolean
                            let v2: auto

                            marca2= (await leerTeclado('\n Introduzca la marca de su coche'))
                            modelo2= (await leerTeclado('\n Introduzca el modelo de su coche'))
                            deposito2= parseFloat(await leerTeclado('\n Introduzca la cantidad de combustible disponible'))
                            vel2= parseInt(await leerTeclado('\n Introduzca la velocidad media'))
                            time2= parseFloat(await leerTeclado('\n Introduzca el tiempo de conduccion'))
                            consumo2= parseFloat(await leerTeclado('\n Introduzca consumo medio 100 km/l (ver ficha tecnica)'))
                            estado2=false

                            v2= new auto(marca2,modelo2,deposito2,vel2,time2,consumo2)
                            v2.Estado =estado2
                            
                            // Procederemos a insertar el menú que le indicará al usuario, las opciones

                            let opcion4: number
                            do {
                                opcion4= await menu3()
                                switch(opcion4) {
                                      case 1:
                                          console.log(`\n Los kilometros que va a realizar son ${v2.Km()} Km`)
                                          break
                                      case 2:
                                          console.log(`\n Los litros que se van a consumir son ${v2.Gasto()} L`)
                                          break
                                      case 3:
                                          console.log(`\n El estado del motor es ${v2.Estado}`)
                                          estado2=false
                                          v2.Estado= estado2
                                          break
                                      case 4:
                                          console.log(`\n Su velocidad es ${v2.Vel} horas`)
                                          vel2=parseInt(await leerTeclado('\n Introduzca la nueva velocidad media'))
                                          v2.Cvel= vel2
                                          break
                                      case 5:
                                          console.log(`\n Su periodo de conducción es  ${v2.Time}`)
                                          time2 =parseFloat(await leerTeclado('\n Introduzca el nuevo periodo de tiempo'))
                                          v2.Ctime= time2
                                          break
                                      case 0:
                                          console.log("\n Usted ha seleccionado salir del submenu")
                                          break
                                      default:
                                          console.log("\n No has seleccionado ninguna opción")
                                          break
                                      }
                                } while (opcion4 != 0)  
                            break
                        case 0:
                            console.log("\n Usted ha finalizado la ejecucion del sofware")
                            break
                        default:
                            console.log("\n No has seleccionado ninguna opción")
                            break
                         }
                    }while (opcion2 != 0)  
                break
            case 2:
                console.log("\n") 
                console.log("Aplicacion diseñada por Julio Ándres Bravo Lozano.") 
                console.log("GitHub: https://github.com/bravolozanojulio/automovil.")     
                console.log("Aplicacion desarrollada en Typescript.")
                console.log("Ultima revisión 29/20/2020 .")
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

            
            
