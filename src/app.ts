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


const main = async () => {

    // Definiremos una variable que utilizaremos posteriormente en el bucle do while para crear los distintos submenus

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

                            // Definiremos los campos y el objeto.

                            let marca:string,modelo:string,deposito:number,vel:number,time:number,consumo:number,estado:boolean
                            let v1: auto

                            // Solicitaremos los datos a través de la consola .

                            marca= (await leerTeclado('\n Introduzca la marca de su coche'))
                            modelo= (await leerTeclado('\n Introduzca el modelo de su coche'))
                              
                            // En este caso utilizaremos try && catch, puesto que el si el deposito es invalido, deberemos mostrar un error.

                            try{
                                deposito= parseInt(await leerTeclado('\n Introduzca la cantidad de combustible disponible'))
                            } catch(error){
                                console.log(error)
                                break
                            }
            
                            vel= parseInt(await leerTeclado('\n Introduzca la velocidad media'))

                            // Utilizaremos parseFloat en lugar de parseInt si deseamos que la entrada por consola detecte decimales.

                            time= parseFloat(await leerTeclado('\n Introduzca el tiempo de conduccion'))
                            consumo= parseFloat(await leerTeclado('\n Introduzca consumo medio 100 km/l (ver ficha tecnica)'))
                            estado=true
                            
                            // Crearenis el objeto con los valores introducidos
                    
                            v1= new auto(marca,modelo,deposito,vel,time,consumo)
                        
                            // Utilizaremos los métodos set para los valores necesarios 

                            v1.Estado =estado
                            v1.Cdepo= deposito


                            // Le mostraremos a través de un console log al usuario los datos introducidos

                            console.log(`--------------------------------------------------------------------------------------------`)
                            console.log(`Su vehiculo es un ${v1.Marca} ${v1.Modelo}, que actualmente esta en estado encendido`)
                            console.log(`Dispone de ${v1.Deposito} l de combustible`)
                            console.log(`El consumo de su auto es de ${v1.Consumo} l/100 km`)
                            console.log(`La velocidad a la que circula es de ${v1.Vel} Km/h`)
                            console.log(`Su tiempo de conduccion esta previsto para ${v1.Time} horas`)
                            
                            
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
                                        console.log(`\n Su velocidad es ${v1.Vel}`)
                                        vel=parseInt(await leerTeclado('\n Introduzca la nueva velocidad media'))
                                        break
                                    case 4:
                                        console.log(`\n Su periodo de conducción es  ${v1.Time} horas`)
                                        time =parseFloat(await leerTeclado('\n Introduzca el nuevo periodo de tiempo'))
                                        v1.Ctime= time
                                        break
                                    case 5:

                                        // En este caso usaremos try && catch, puesto no se puede repostar con el motor encendido.

                                        try{
                                            v1.Repos = deposito
                                        } catch(error){
                                            console.log(error)
                                            opcion3=0
                                            break
                                        }

                                        console.log(`\n Su cantidad de combustible es ${v1.Deposito}`)
                                        deposito=parseFloat(await leerTeclado('\n Introduzca la nueva cantidad de combustible'))
                                        v1.Repos= deposito
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
                                
                                // Los mismas indicaciones que el case 1

                            console.log("\n El motor esta apagado")

                            let marca2:string,modelo2:string,deposito2:number,vel2:number,time2:number,consumo2:number,estado2:boolean
                            let v2: auto

                            marca2= (await leerTeclado('\n Introduzca la marca de su coche'))
                            modelo2= (await leerTeclado('\n Introduzca el modelo de su coche'))

                            try{
                                deposito2= parseInt(await leerTeclado('\n Introduzca la cantidad de combustible disponible'))
                            } catch(error){
                                console.log(error)
                                break
                            }

                            vel2= parseInt(await leerTeclado('\n Introduzca la velocidad media'))
                            time2= parseFloat(await leerTeclado('\n Introduzca el tiempo de conduccion'))
                            consumo2= parseFloat(await leerTeclado('\n Introduzca consumo medio 100 km/l (ver ficha tecnica)'))
                            estado2=false

                            v2= new auto(marca2,modelo2,deposito2,vel2,time2,consumo2)
                            v2.Estado =estado2
                            v2.Cdepo= deposito2


                            console.log(`--------------------------------------------------------------------------------------------`)
                            console.log(`Su vehiculo es un ${v2.Marca} ${v2.Modelo}, que actualmente esta en apagado`)
                            console.log(`Dispone de ${v2.Deposito} l de combustible`)
                            console.log(`El consumo de su auto es de ${v2.Consumo} l/100 km`)
                            console.log(`La velocidad a la que circula es de ${v2.Vel} Km/h`)
                            console.log(`Su tiempo de conduccion esta previsto para ${v2.Time} horas`)
                        

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
                                          
                                          // En este caso utilizaremos try && catch, puesto que no se puede modificar la velocidad con el motor apagado.

                                        try{
                                            v2.Cvel= vel2
                                         }catch(error){
                                            console.log(error)
                                            opcion4=0
                                            break
                                        }
                                      case 4:
                                          console.log(`\n Su periodo de conducción es  ${v2.Time}`)
                                          time2 =parseFloat(await leerTeclado('\n Introduzca el nuevo periodo de tiempo'))
                                          v2.Ctime= time2
                                          break
                                      case 5:
                                          console.log(`\n Su cantidad de combustible es ${v2.Deposito}`)
                                          deposito2 =parseFloat(await leerTeclado('\n Introduzca la nueva cantidad de combustible'))
                                          v2.Cdepo= deposito2
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
                // Esta opción mostrara informacion sobre el creador del programa
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

            
            
