import { leerTeclado } from '../entradaTeclado'

export const menu2 = async () => {
    let opcion2: number
    console.log('\n')
    console.log('1.- Motor en marcha')
    console.log('2.- Motor parado ')
    console.log('0.- Salir ')
    opcion2 = parseInt(await leerTeclado('Seleccione una opcion de nuestro programa') )
    return opcion2
}