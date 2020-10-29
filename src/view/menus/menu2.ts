import { leerTeclado } from '../entradaTeclado'

export const menu2 = async () => {
    let opcion2: number
    console.log('\n')
    console.log('1.- Motor encendido')
    console.log('2.- Motor apagado ')
    console.log('0.- Salir ')
    opcion2 = parseInt(await leerTeclado('Seleccione una opcion de nuestro programa') )
    return opcion2
}