// Importaciones 

    // Importación clase 

    import {auto} from './models/automovil'

    // Importación menu 

    import {menprin} from './view/menus/menuPrincipal'

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
                console.log("Correcto")
                break
            case 2:
                console.log("Informacion ultimo coche")
                break
            case 0:
                console.log("Usted ha finalizado la ejecucion del sofware")
                break
              }
            }
    while (opcion != 0)   
} 
    

            
            
