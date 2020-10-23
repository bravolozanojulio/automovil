import { leerTeclado } from '../entradaTeclado'

export const menprin = async () => {
    let opcion: number
    console.log('\n')
    console.log('1.- Introduzca un coche \n')
    console.log('2.- Mostrar información último coche \n')
    console.log('0.- Salir \n')
    opcion = parseInt( await leerTeclado('Seleccione una opcion de nuestro programa') )
    return opcion
}