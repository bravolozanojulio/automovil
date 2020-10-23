import { leerTeclado } from '../entradaTeclado'

export const menu3 = async () => {
    let opcion3: number
    console.log('\n')
    opcion3 = parseInt( await leerTeclado('Introduzca la velocidad del vehiculo') )
    return opcion3
}