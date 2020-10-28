import { leerTeclado } from '../entradaTeclado'

export const menprin = async () => {
    let opcion: number
    console.log('\n')
    console.log('1.- Introduzca un coche ')
    console.log('2.- Informacion aplicación ')
    console.log('0.- Salir')
    opcion = parseInt(await leerTeclado('\n Seleccione una opcion de nuestro programa') )
    return opcion
}